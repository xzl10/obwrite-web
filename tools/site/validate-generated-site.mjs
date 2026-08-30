import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { config } from "./config.mjs";
import { loadPosts } from "./load-posts.mjs";
import { normalizePosts } from "./normalize-post.mjs";

const posts = normalizePosts(await loadPosts(config.postRoot), config);
const paths = ["index.html", "style.css", "platforms.css", "script.js", "blog/index.html", "feed.xml", "sitemap.xml", "robots.txt", "404.html", ...posts.map((post) => `blog/${post.slug}/index.html`)];
for (const relativePath of paths) await access(path.join(config.siteRoot, relativePath));

const htmlPaths = ["index.html", "blog/index.html", "404.html", ...posts.map((post) => `blog/${post.slug}/index.html`)];
for (const relativePath of htmlPaths) {
  const html = await readFile(path.join(config.siteRoot, relativePath), "utf8");
  const pageUrl = new URL(relativePath.replace(/index\.html$/, ""), `${config.siteUrl}/`);
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (href.startsWith("#") || href.startsWith("mailto:")) continue;
    const url = new URL(href, pageUrl);
    if (url.origin !== config.siteUrl) continue;
    const localPath = decodeURIComponent(url.pathname).replace(/^\//, "");
    const target = localPath === "" || localPath.endsWith("/") ? path.join(config.siteRoot, localPath, "index.html") : path.join(config.siteRoot, localPath);
    await access(target).catch(() => { throw new Error(`${relativePath}: broken link ${href}`); });
  }
}

const index = await readFile(path.join(config.siteRoot, "index.html"), "utf8");
const main = index.match(/<main id="main">([\s\S]*?)<\/main>/)?.[1];
if (!main) throw new Error("index.html: missing main content");
const directSections = [];
let sectionDepth = 0;
for (const [tag] of main.matchAll(/<\/?section\b[^>]*>/g)) {
  if (tag.startsWith("</")) sectionDepth--;
  else {
    if (sectionDepth === 0) directSections.push(tag.match(/\bid="([^"]+)"/)?.[1] ?? "");
    sectionDepth++;
  }
}
if (sectionDepth !== 0) throw new Error("index.html: unbalanced section structure");
if (directSections.join(",") !== "blog,platforms") throw new Error(`index.html: expected only blog and platforms sections, found ${directSections.join(",")}`);
if (/<h[1-3]\b/.test(main)) throw new Error("index.html: heading levels 1 through 3 are forbidden on the top page");
if (!main.includes('<h4 data-i18n="blog_title">')) throw new Error("index.html: missing blog h4 heading");
for (const removed of ['class="hero"', 'id="outcome"', 'class="section privacy-panel"', 'id="pricing"', 'id="requirements"', "purchase-panel"]) {
  if (main.includes(removed)) throw new Error(`index.html: purged component remains: ${removed}`);
}
const landingBoothLinks = index.match(/https:\/\/booth\.pm\/ja\/items\/8774082/g)?.length ?? 0;
if (landingBoothLinks !== 1) throw new Error(`index.html: expected one header BOOTH link, found ${landingBoothLinks}`);
if ((main.match(/class="post-card/g) ?? []).length !== 5) throw new Error("index.html: expected five latest blog cards");
for (const expected of ["楽天ラクマ", "BETA"]) {
  if (!index.includes(expected)) throw new Error(`index.html: missing support value ${expected}`);
}
const platformCards = [...index.matchAll(/<article class="platform-card" data-support="(stable|experimental)">([\s\S]*?)<\/article>/g)];
if (platformCards.length !== 6) throw new Error(`index.html: expected 6 platform cards, found ${platformCards.length}`);
if (platformCards.filter(([, support]) => support === "stable").length !== 4) throw new Error("index.html: expected 4 stable platform cards");
if (platformCards.filter(([, support]) => support === "experimental").length !== 2) throw new Error("index.html: expected 2 experimental platform cards");
if (platformCards.some(([, , card]) => card.includes("<p"))) throw new Error("index.html: platform cards must use capability arrays, not prose");
if ((index.match(/data-support-group="(stable|experimental)"/g) ?? []).length !== 2) throw new Error("index.html: expected stable and experimental support columns");
for (const capability of ["ポスト", "画像", "動画"]) {
  if (!index.includes(`>${capability}</li>`)) throw new Error(`index.html: missing capability ${capability}`);
}
for (const asset of ["x.jpg", "mercari.jpg", "yahoo-fleamarket.png", "rakuma.png", "reddit.svg", "civitai.svg"]) {
  if (!index.includes(`/assets/platforms/${asset}`)) throw new Error(`index.html: missing platform asset ${asset}`);
  await access(path.join(config.siteRoot, "assets", "platforms", asset));
}
for (const post of posts) {
  const html = await readFile(path.join(config.siteRoot, "blog", post.slug, "index.html"), "utf8");
  if (!html.includes(`<link rel="canonical" href="${config.siteUrl}/blog/${post.slug}/">`)) throw new Error(`${post.slug}: canonical mismatch`);
  if (html.includes("article-cta")) throw new Error(`${post.slug}: inline purchase CTA must not be rendered`);
  const boothLinks = html.match(/https:\/\/booth\.pm\/ja\/items\/8774082/g)?.length ?? 0;
  if (boothLinks !== 1) throw new Error(`${post.slug}: expected exactly one BOOTH link, found ${boothLinks}`);
  const json = html.match(/<script type="application\/ld\+json">(.+?)<\/script>/s)?.[1];
  if (!json || JSON.parse(json)["@type"] !== "BlogPosting") throw new Error(`${post.slug}: invalid BlogPosting JSON-LD`);
}
console.log(`Validated ${paths.length} generated paths and ${htmlPaths.length} HTML link graphs.`);
