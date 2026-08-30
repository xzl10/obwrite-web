import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderMarkdown } from "./markdown-adapter.mjs";
import { escapeXml } from "./escape.mjs";
import { articlePage, blogIndex, postCard } from "../../_site-src/blog/templates/pages.mjs";

function rss(config, posts) {
  const items = posts.map((post) => `<item><title>${escapeXml(post.title)}</title><link>${config.siteUrl}/blog/${post.slug}/</link><guid>${config.siteUrl}/blog/${post.slug}/</guid><pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate><description>${escapeXml(post.description)}</description></item>`).join("");
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Obwrite Blog</title><link>${config.siteUrl}/blog/</link><description>Obwriteのローカル保存・動作環境・更新情報</description><language>ja</language>${items}</channel></rss>\n`;
}

function sitemap(config, posts) {
  const urls = [{ url: `${config.siteUrl}/`, date: posts[0]?.updated }, { url: `${config.siteUrl}/blog/`, date: posts[0]?.updated }, ...posts.map((post) => ({ url: `${config.siteUrl}/blog/${post.slug}/`, date: post.updated }))];
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((item) => `<url><loc>${item.url}</loc>${item.date ? `<lastmod>${item.date}</lastmod>` : ""}</url>`).join("")}</urlset>\n`;
}

function notFound(config) {
  return `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex"><title>ページが見つかりません | Obwrite</title><link rel="stylesheet" href="/style.css"></head><body><main class="error-page"><p class="eyebrow">404</p><h1>ページが見つかりません</h1><p>URLをご確認いただくか、Obwriteのホームへ戻ってください。</p><a class="button" href="${config.siteUrl}/">ホームへ戻る</a></main></body></html>\n`;
}

export async function renderSite(config, posts) {
  const [lpTemplate, style, platformStyle, script] = await Promise.all([
    readFile(path.join(config.sourceRoot, "lp", "index.html"), "utf8"),
    readFile(path.join(config.sourceRoot, "assets", "style.css"), "utf8"),
    readFile(path.join(config.sourceRoot, "assets", "platforms.css"), "utf8"),
    readFile(path.join(config.sourceRoot, "assets", "script.js"), "utf8")
  ]);
  const latest = posts.slice(0, 5).map((post) => postCard(post, "", "h4")).join("\n");
  const documents = new Map([
    ["index.html", lpTemplate.replace("{{LATEST_POSTS}}", latest)],
    ["style.css", style],
    ["platforms.css", platformStyle],
    ["script.js", script],
    ["blog/index.html", blogIndex(config, posts)],
    ["feed.xml", rss(config, posts)],
    ["sitemap.xml", sitemap(config, posts)],
    ["robots.txt", `User-agent: *\nAllow: /\nSitemap: ${config.siteUrl}/sitemap.xml\n`],
    ["404.html", notFound(config)]
  ]);
  for (const post of posts) {
    const related = posts.filter((candidate) => candidate.slug !== post.slug).slice(0, 3);
    documents.set(`blog/${post.slug}/index.html`, articlePage(config, post, renderMarkdown(post.body), related));
  }
  return documents;
}
