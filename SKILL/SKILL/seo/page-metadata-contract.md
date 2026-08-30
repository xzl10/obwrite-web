---
id: page-metadata-contract
trigger: "SEO metadata, title, description, canonical, Open Graph, Twitter Card, hreflang"
confidence: 0.8
responsibility: seo
knowledge_type: policy
temporality: timeless
source: "_site-src/lp/index.html; _site-src/blog/templates/layout.mjs"
related:
  - static-page-addressability
---

## Action

// SKILL := page_metadata_contract
// Signature: AddressablePage → MetadataProjection

CORE := PageIdentity → CanonicalMetadata → ShareMetadataConsistency

Metadata(page)
  := unique_title
   ∪ unique_description
   ∪ canonical_url
   ∪ OpenGraph(page)
   ∪ TwitterCard(page)

OpenGraph.url = canonical_url
OpenGraph.title = page.title
OpenGraph.description = page.description

TranslationLink(locale) is emitted only_if translated_page_exists(locale)
SyntheticHreflang = FORBIDDEN
