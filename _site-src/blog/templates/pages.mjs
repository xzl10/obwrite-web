import { escapeHtml } from "../../../tools/site/escape.mjs";
import { head, siteFooter, siteHeader } from "./layout.mjs";

const labels = Object.freeze({ workflow: "ワークフロー", requirements: "動作環境", obsidian: "Obsidian", privacy: "プライバシー", release: "リリース" });

export function postCard(post, prefix = "") {
  return `<a class="post-card${post.featured ? " post-card-featured" : ""}" href="${prefix}/blog/${post.slug}/">
  <span class="post-category">${labels[post.category]}</span>
  <h3>${escapeHtml(post.title)}</h3>
  <p>${escapeHtml(post.description)}</p>
  <time datetime="${post.date}">${post.date}</time>
</a>`;
}

export function blogIndex(config, posts) {
  const canonical = `${config.siteUrl}/blog/`;
  return `${head({ title: "Obwrite Blog — ローカル保存とObsidianの実践", description: "Obwriteの動作環境、保存ワークフロー、Obsidian設定、プライバシー、更新情報を公開します。", canonical })}
<body>${siteHeader("..")}
<main id="main" class="page-shell">
  <header class="blog-hero"><p class="eyebrow">OBWRITE ARCHIVE LOG</p><h1>Blog</h1><p>成果、動作条件、設定、更新内容を、内部機構ではなく検証可能な範囲で記録します。</p></header>
  <section class="bento-grid" aria-label="記事一覧">${posts.map((post) => postCard(post, "..")).join("\n")}</section>
</main>${siteFooter("..")} </body></html>\n`;
}

export function articlePage(config, post, html, related) {
  const canonical = `${config.siteUrl}/blog/${post.slug}/`;
  const schema = { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, datePublished: post.date, dateModified: post.updated, inLanguage: "ja", author: { "@type": "Organization", name: "Obwrite Official" }, publisher: { "@type": "Organization", name: "Obwrite Official" }, mainEntityOfPage: canonical };
  return `${head({ title: `${post.title} | Obwrite Blog`, description: post.description, canonical, type: "article", json: schema })}
<body>${siteHeader("../..")}
<main id="main" class="article-shell">
  <nav class="breadcrumb" aria-label="パンくず"><a href="../../">ホーム</a><span>/</span><a href="../">ブログ</a><span>/</span><span>${labels[post.category]}</span></nav>
  <article>
    <header class="article-header"><span class="post-category">${labels[post.category]}</span><h1>${escapeHtml(post.title)}</h1><p>${escapeHtml(post.description)}</p><div class="article-dates"><time datetime="${post.date}">公開 ${post.date}</time><time datetime="${post.updated}">更新 ${post.updated}</time></div></header>
    <div class="article-body">${html}</div>
  </article>
  <section class="related"><h2>関連する記事</h2><div class="related-grid">${related.map((item) => postCard(item, "../..")).join("\n")}</div></section>
</main>${siteFooter("../..")} </body></html>\n`;
}
