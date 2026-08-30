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
// Signature: PublicContentSet → AddressableResourceSet

CORE := ContentIdentity → UniqueAddress → DirectRetrieval

∀ content ∈ PublicContentSet:
  ∃! address ∈ AddressableResourceSet:
    Retrieve(address) returns content without prior client state

ContentIdentity(content_a) ≠ ContentIdentity(content_b)
  ⇒ Address(content_a) ≠ Address(content_b)

Address(content) MUST remain stable while identity(content) is stable

ModalOnlyPublicContent = FALSE
SharedRuntimeAddressForDistinctContent = FALSE
