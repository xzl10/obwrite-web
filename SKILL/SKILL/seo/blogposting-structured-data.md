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
// Signature: NormalizedPost × CanonicalURL → JSONLD

CORE := NormalizedPostProjection → SafeSerialization → MetadataIdentity

BlogPosting
  := headline(post.title)
   ∪ description(post.description)
   ∪ datePublished(post.date)
   ∪ dateModified(post.updated)
   ∪ inLanguage(`ja`)
   ∪ author(ObwriteOfficial)
   ∪ publisher(ObwriteOfficial)
   ∪ mainEntityOfPage(canonical)

JSONLD.headline = VisibleArticleHeading
JSONLD.mainEntityOfPage = CanonicalURL
Serialize(JSONLD) MUST escape `<` as `\u003c`
