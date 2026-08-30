---
id: blogposting-structured-data
trigger: "BlogPosting, JSON-LD, structured data, schema.org, article metadata"
confidence: 0.8
responsibility: seo
knowledge_type: mechanism
temporality: stateful
source: "_site-src/blog/templates/pages.mjs; tools/site/escape.mjs"
related:
  - page-metadata-contract
---

## Action

// SKILL := blogposting_structured_data
// Signature: CanonicalArticleIdentity × ArticleMetadata → StructuredData

CORE := IdentityProjection → ContextSafeSerialization → CrossSurfaceConsistency

StructuredData MUST project declared article identity and provenance

IdentityFields
  := headline ∪ description ∪ publication_time
   ∪ modification_time ∪ language ∪ authorship ∪ canonical_address

StructuredData.headline = VisibleArticleHeading
StructuredData.canonical_address = CanonicalAddress
StructuredData values MUST derive_from ArticleMetadata

Serialize(StructuredData, ScriptContext)
  MUST neutralize script-context termination

StructuredData MUST NOT invent unavailable metadata
