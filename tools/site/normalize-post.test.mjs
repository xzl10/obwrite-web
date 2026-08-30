import assert from "node:assert/strict";
import test from "node:test";
import { config } from "./config.mjs";
import { normalizePost, normalizePosts } from "./normalize-post.mjs";

function document(name, overrides = {}, body = "本文") {
  const data = { title: "記事", description: "説明", date: "2026-08-28", updated: "2026-08-28", slug: "valid-slug", category: "workflow", featured: false, draft: false, ...overrides };
  return { name, source: `---\n${Object.entries(data).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join("\n")}\n---\n${body}` };
}

test("normalizes a valid post", () => {
  const post = normalizePost(document("valid.md"), config);
  assert.equal(post.slug, "valid-slug");
  assert.equal(post.body, "本文");
});

test("rejects path traversal slugs", () => {
  assert.throws(() => normalizePost(document("bad.md", { slug: "../outside" }), config), /invalid slug/);
});

test("rejects duplicate slugs", () => {
  assert.throws(() => normalizePosts([document("a.md"), document("b.md")], config), /duplicate slug/);
});

test("excludes drafts and sorts published posts deterministically", () => {
  const posts = normalizePosts([
    document("draft.md", { slug: "draft", draft: true }),
    document("b.md", { slug: "b", date: "2026-08-29", updated: "2026-08-29" }),
    document("a.md", { slug: "a", date: "2026-08-29", updated: "2026-08-29" })
  ], config);
  assert.deepEqual(posts.map((post) => post.slug), ["a", "b"]);
});
