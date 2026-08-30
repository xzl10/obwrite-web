import path from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

export const config = Object.freeze({
  siteRoot,
  sourceRoot: path.join(siteRoot, "_site-src"),
  staticRoot: path.join(siteRoot, "_site-src", "static"),
  postRoot: path.join(siteRoot, "_site-src", "blog", "posts"),
  stageRoot: path.join(siteRoot, ".site-build"),
  siteUrl: "https://obwrite.com",
  siteName: "Obwrite",
  version: "0.8.0",
  boothUrl: "https://booth.pm/ja/items/8774082",
  gumroadUrl: "https://obwrite.gumroad.com/l/app",
  categories: Object.freeze(["workflow", "requirements", "obsidian", "privacy", "release"]),
  generatedPaths: Object.freeze(["index.html", "style.css", "platforms.css", "script.js", "assets", "blog", "feed.xml", "sitemap.xml", "robots.txt", "404.html"])
});
