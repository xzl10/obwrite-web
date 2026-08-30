---
id: content-ingestion-normalization
trigger: "Markdown frontmatter, slug, draft, date, category, normalize post, sort posts"
confidence: 0.9
responsibility: build
knowledge_type: mechanism
temporality: stateful
source: "tools/site/load-posts.mjs; tools/site/normalize-post.mjs"
related: []
---

## Action

// SKILL := content_ingestion_normalization
// Signature: RawContentSet × PublicationPolicy → CanonicalPublishedSet

CORE := DeterministicLoad → SchemaValidation → EligibilityFilter → TotalOrder

Load(RawContentSet) MUST be independent_of filesystem enumeration order

∀ item:
  ValidateRequiredIdentity(item)
  ∧ ValidateContent(item)
  ∧ ValidateTypedMetadata(item)

CanonicalIdentity MUST be unique within RawContentSet
PublicationEligibility MUST derive_from PublicationPolicy

Sort(CanonicalPublishedSet) MUST define a deterministic total order
EqualPrimarySortKey ⇒ deterministic_tie_breaker

Output contains only validated eligible immutable values
