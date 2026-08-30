import { escapeHtml, jsonLd } from "../../../tools/site/escape.mjs";

export function head({ title, description, canonical, type = "website", json = null }) {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeTitle}</title>
  <meta name="description" content="${safeDescription}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="Obwrite">
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeDescription}">
  <meta property="og:url" content="${canonical}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:description" content="${safeDescription}">
  <link rel="alternate" type="application/rss+xml" title="Obwrite Blog" href="https://obwrite.com/feed.xml">
  <link rel="stylesheet" href="${canonical.endsWith('/blog/') ? '../style.css?v=20260830' : canonical.includes('/blog/') ? '../../style.css?v=20260830' : 'style.css?v=20260830'}">
  ${json ? `<script type="application/ld+json">${jsonLd(json)}</script>` : ""}
  <script src="${canonical.endsWith('/blog/') ? '../script.js?v=20260830' : canonical.includes('/blog/') ? '../../script.js?v=20260830' : 'script.js?v=20260830'}" defer></script>
</head>`;
}

export function siteHeader(prefix = "") {
  return `<a class="skip-link" href="#main">本文へ移動</a>
<header class="site-header">
  <a class="brand" href="${prefix}/" aria-label="Obwrite ホーム">Obwrite</a>
  <nav aria-label="メインナビゲーション">
    <a href="${prefix}/blog/">ブログ</a>
  </nav>
  <div class="header-actions">
    <a class="button button-small" href="https://booth.pm/ja/items/8774082">BOOTH</a>
    <a class="button button-small button-secondary" href="https://obwrite.gumroad.com/l/app">Gumroad</a>
  </div>
</header>`;
}

export function siteFooter(prefix = "") {
  return `<footer class="site-footer">
  <div><strong>Obwrite</strong></div>
  <nav aria-label="フッターナビゲーション"><a href="${prefix}/blog/">ブログ</a><a href="mailto:obwrite@gmail.com">サポート</a><a href="https://x.com/Obwrite">公式X</a></nav>
  <p>© 2026 Obwrite Official</p>
</footer>`;
}
