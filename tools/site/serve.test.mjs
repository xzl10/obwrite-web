import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { after, before, test } from "node:test";
import { createPreviewServer, parsePort } from "./serve.mjs";

let origin;
let root;
let server;

function request(pathname, { method = "GET", host } = {}) {
  const url = new URL(pathname, origin);
  return new Promise((resolve, reject) => {
    const req = http.request(url, { method, headers: host ? { Host: host } : {} }, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks).toString("utf8") }));
    });
    req.on("error", reject);
    req.end();
  });
}

before(async () => {
  root = await mkdtemp(path.join(os.tmpdir(), "obwrite-preview-"));
  await mkdir(path.join(root, "blog"));
  await mkdir(path.join(root, "_site-src"));
  await writeFile(path.join(root, "index.html"), "<h1>Home</h1>");
  await writeFile(path.join(root, "blog", "index.html"), "<h1>Blog</h1>");
  await writeFile(path.join(root, "404.html"), "<h1>Custom 404</h1>");
  await writeFile(path.join(root, "package.json"), "PRIVATE");
  await writeFile(path.join(root, "_site-src", "secret.txt"), "PRIVATE SOURCE");
  server = createPreviewServer({ siteRoot: root, generatedPaths: ["index.html", "blog", "404.html"] });
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  origin = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  if (server?.listening) await new Promise((resolve) => server.close(resolve));
  if (root) await rm(root, { recursive: true, force: true });
});

test("validates preview ports", () => {
  assert.equal(parsePort(undefined), 55770);
  assert.equal(parsePort("8080"), 8080);
  for (const value of ["0", "65536", "1.5", "abc"]) assert.throws(() => parsePort(value), /PORT/);
});

test("serves generated pages with preview headers", async () => {
  const home = await request("/");
  assert.equal(home.status, 200);
  assert.equal(home.body, "<h1>Home</h1>");
  assert.match(home.headers["content-type"], /^text\/html/);
  assert.equal(home.headers["cache-control"], "no-store");
  assert.equal(home.headers["x-content-type-options"], "nosniff");
  const blog = await request("/blog/");
  assert.equal(blog.status, 200);
  assert.equal(blog.body, "<h1>Blog</h1>");
});

test("implements HEAD and rejects unsupported methods", async () => {
  const head = await request("/", { method: "HEAD" });
  assert.equal(head.status, 200);
  assert.equal(head.body, "");
  const post = await request("/", { method: "POST" });
  assert.equal(post.status, 405);
  assert.equal(post.headers.allow, "GET, HEAD");
});

test("does not expose repository-private paths", async () => {
  for (const pathname of ["/package.json", "/_site-src/secret.txt", "/tools/site/serve.mjs", "/.git/config", "/SKILL/SKILL/INDEX.md"]) {
    const response = await request(pathname);
    assert.equal(response.status, 404, pathname);
    assert.equal(response.body, "<h1>Custom 404</h1>");
  }
});

test("rejects encoded traversal and malformed URLs without terminating", async () => {
  for (const pathname of ["/%5c..%5cpackage.json", "/..%5cpackage.json", "/%E0%A4%A"]) {
    const response = await request(pathname);
    assert.ok(response.status === 400 || response.status === 404, `${pathname}: ${response.status}`);
    assert.doesNotMatch(response.body, /PRIVATE/);
  }
  assert.equal((await request("/")).status, 200);
});

test("rejects non-local Host headers", async () => {
  const response = await request("/", { host: "attacker.example" });
  assert.equal(response.status, 421);
});

test("returns the custom 404 document", async () => {
  const response = await request("/missing");
  assert.equal(response.status, 404);
  assert.equal(response.body, "<h1>Custom 404</h1>");
  assert.match(response.headers["content-type"], /^text\/html/);
});
