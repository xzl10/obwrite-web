---
id: static-page-addressability
trigger: "static page, article URL, blog route, direct URL, SPA avoidance, 404, addressability"
confidence: 0.8
responsibility: architecture
knowledge_type: invariant
temporality: timeless
source: "_site-src/blog/templates/pages.mjs; tools/site/render-site.mjs"
related:
  - authoring-generated-zone-ownership
---

## Action

// SKILL := static_page_addressability
// Signature: PublicContentSet → AddressablePathSet

CORE := ContentIdentity → UniquePath → DirectRetrieval

Path(LandingPage) := `/`
Path(BlogIndex) := `/blog/`
Path(Post(slug)) := `/blog/{slug}/`
Path(NotFound) := `/404.html`

∀ content ∈ PublicContentSet:
  ∃! path ∈ AddressablePathSet: GET(path) returns content without modal state

PostIdentity(post_a) ≠ PostIdentity(post_b)
  ⇒ Path(post_a) ≠ Path(post_b)

ModalOnlyArticle = FALSE
SingleURLRuntimeBlog = FALSE
