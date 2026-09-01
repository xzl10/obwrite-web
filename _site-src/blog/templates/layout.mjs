import { escapeHtml, jsonLd } from "../../../tools/site/escape.mjs";

export function head({ title, description, canonical, type = "website", json = null }) {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-DPDKL2QMQP"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DPDKL2QMQP');
  </script>
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
  <script src="https://gumroad.com/js/gumroad.js" defer></script>
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
    <a class="booth-button" href="https://booth.pm/ja/items/8774082" aria-label="BOOTHで購入"><img src="/assets/booth-logo.svg" alt="BOOTH" width="108" height="38"></a>
    <a class="gumroad-button" href="https://obwrite.gumroad.com/l/app"></a>
  </div>
</header>`;
}

export function siteFooter(prefix = "") {
  return `<footer class="site-footer">
  <p class="site-footer-brand"><strong>Obwrite</strong> <span class="footer-copy">© 2026 Obwrite Official</span></p>
  <nav aria-label="フッターナビゲーション"><a href="${prefix}/blog/">ブログ</a><a href="mailto:obwrite@gmail.com">サポート</a><a href="https://x.com/Obwrite">公式X</a></nav>
</footer>
<div id="gumroad-modal" class="gumroad-modal" hidden aria-hidden="true">
  <div class="gumroad-modal-dialog" role="dialog" aria-modal="true" aria-label="Gumroad Checkout">
    <button type="button" class="gumroad-modal-close" aria-label="閉じる">✕</button>
    <iframe src="about:blank" title="Gumroad Checkout" allow="payment"></iframe>
  </div>
</div>`;
}
