---
id: deterministic-site-render
trigger: "render site, deterministic generator, Markdown adapter, escape HTML XML, generated documents"
confidence: 0.8
responsibility: build
knowledge_type: mechanism
temporality: stateful
source: "tools/site/render-site.mjs; tools/site/markdown-adapter.mjs; tools/site/escape.mjs"
related:
  - content-ingestion-normalization
  - static-page-addressability
  - feed-sitemap-discovery
  - blogposting-structured-data
---

## Action

// SKILL := deterministic_site_render
// Signature: FixedSourceSnapshot × NormalizedPosts × Config → DocumentMap

CORE := PureProjectionBoundary → ContextualEscaping → CompleteDocumentMap

MarkdownAdapter.html = FALSE
HTMLText → escapeHtml
XMLText → escapeXml
StructuredData → jsonLd

DocumentMap MUST contain
  { index.html, style.css, platforms.css, script.js,
    blog/index.html, feed.xml, sitemap.xml, robots.txt, 404.html }

∀ post ∈ NormalizedPosts:
  DocumentMap contains `blog/{post.slug}/index.html`

SameByteInputs ∧ SameToolchain ⇒ ExpectedSameByteDocumentMap
