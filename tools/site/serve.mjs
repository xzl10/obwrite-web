import http from "node:http";
import { readFile, realpath, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "./config.mjs";

const defaultHost = "127.0.0.1";
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

export function parsePort(value, fallback = 55770) {
  const port = value === undefined || value === "" ? fallback : Number(value);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error(`PORT must be an integer from 1 to 65535, received ${value}`);
  return port;
}

function isLocalHost(hostHeader) {
  if (!hostHeader) return false;
  try {
    const hostname = new URL(`http://${hostHeader}`).hostname;
    return hostname === "127.0.0.1" || hostname === "localhost";
  } catch {
    return false;
  }
}

function isInside(root, target) {
  const relative = path.relative(root, target);
  return relative === "" || (!relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative));
}

function isPublishedPath(relativePath, generatedPaths) {
  const normalized = relativePath.split(path.sep).join("/");
  return generatedPaths.some((entry) => normalized === entry || normalized.startsWith(`${entry}/`));
}

function decodeRequestPath(requestUrl) {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(requestUrl, "http://127.0.0.1").pathname);
  } catch {
    return { error: 400 };
  }
  if (pathname.includes("\0") || pathname.includes("\\")) return { error: 400 };
  const segments = pathname.split("/").filter(Boolean);
  if (segments.some((segment) => segment === "." || segment === "..")) return { error: 400 };
  return { segments, directoryRequest: pathname.endsWith("/") || segments.length === 0 };
}

async function resolvePublishedPath(requestUrl, siteRoot, generatedPaths) {
  const decoded = decodeRequestPath(requestUrl);
  if (decoded.error) return decoded;
  const segments = [...decoded.segments];
  if (decoded.directoryRequest) segments.push("index.html");
  let candidate = path.resolve(siteRoot, ...segments);
  if (!isInside(siteRoot, candidate)) return { error: 404 };
  let relativePath = path.relative(siteRoot, candidate);
  if (!isPublishedPath(relativePath, generatedPaths)) return { error: 404 };
  try {
    const candidateStat = await stat(candidate);
    if (candidateStat.isDirectory()) {
      candidate = path.join(candidate, "index.html");
      relativePath = path.relative(siteRoot, candidate);
      if (!isPublishedPath(relativePath, generatedPaths)) return { error: 404 };
    }
    const [realRoot, realCandidate] = await Promise.all([realpath(siteRoot), realpath(candidate)]);
    if (!isInside(realRoot, realCandidate) || !(await stat(realCandidate)).isFile()) return { error: 404 };
    return { filePath: realCandidate };
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ENOTDIR" || error.code === "EACCES") return { error: 404 };
    throw error;
  }
}

function responseHeaders(contentType, length) {
  return {
    "Cache-Control": "no-store",
    "Content-Type": contentType,
    "Content-Length": length,
    "X-Content-Type-Options": "nosniff"
  };
}

function sendBuffer(req, res, status, contentType, body, extraHeaders = {}) {
  res.writeHead(status, { ...responseHeaders(contentType, body.length), ...extraHeaders });
  if (req.method === "HEAD") res.end();
  else res.end(body);
}

async function sendNotFound(req, res, siteRoot, generatedPaths) {
  try {
    const resolved = await resolvePublishedPath("/404.html", siteRoot, generatedPaths);
    if (!resolved.filePath) throw new Error("404 document is unavailable");
    const body = await readFile(resolved.filePath);
    sendBuffer(req, res, 404, mimeTypes[".html"], body);
  } catch {
    sendBuffer(req, res, 404, mimeTypes[".txt"], Buffer.from("404 Not Found"));
  }
}

export function createPreviewServer({ siteRoot = config.siteRoot, generatedPaths = config.generatedPaths } = {}) {
  const root = path.resolve(siteRoot);
  const published = [...generatedPaths];
  const server = http.createServer(async (req, res) => {
    try {
      if (!isLocalHost(req.headers.host)) {
        sendBuffer(req, res, 421, mimeTypes[".txt"], Buffer.from("421 Misdirected Request"));
        return;
      }
      if (req.method !== "GET" && req.method !== "HEAD") {
        sendBuffer(req, res, 405, mimeTypes[".txt"], Buffer.from("405 Method Not Allowed"), { Allow: "GET, HEAD" });
        return;
      }
      const resolved = await resolvePublishedPath(req.url, root, published);
      if (resolved.error === 400) {
        sendBuffer(req, res, 400, mimeTypes[".txt"], Buffer.from("400 Bad Request"));
        return;
      }
      if (!resolved.filePath) {
        await sendNotFound(req, res, root, published);
        return;
      }
      const body = await readFile(resolved.filePath);
      const contentType = mimeTypes[path.extname(resolved.filePath).toLowerCase()] || "application/octet-stream";
      sendBuffer(req, res, 200, contentType, body);
    } catch {
      if (!res.headersSent) sendBuffer(req, res, 500, mimeTypes[".txt"], Buffer.from("500 Internal Server Error"));
      else res.destroy();
    }
  });
  server.on("clientError", (_error, socket) => socket.end("HTTP/1.1 400 Bad Request\r\nConnection: close\r\n\r\n"));
  return server;
}

async function main() {
  const port = parsePort(process.env.PORT);
  const server = createPreviewServer();
  server.once("error", (error) => {
    const detail = error.code === "EADDRINUSE" ? `port ${port} is already in use` : error.message;
    console.error(`Obwrite Preview Server failed: ${detail}`);
    process.exitCode = 1;
  });
  server.listen(port, defaultHost, () => {
    console.log("\n  Obwrite Preview Server running:");
    console.log(`  > LP:   http://${defaultHost}:${port}/`);
    console.log(`  > Blog: http://${defaultHost}:${port}/blog/\n`);
  });
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (invokedPath === fileURLToPath(import.meta.url)) main().catch((error) => {
  console.error(`Obwrite Preview Server failed: ${error.message}`);
  process.exitCode = 1;
});
