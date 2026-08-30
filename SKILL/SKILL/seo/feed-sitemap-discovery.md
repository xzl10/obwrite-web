---
id: feed-sitemap-discovery
trigger: "RSS, sitemap, robots.txt, discovery artifact, draft exclusion"
confidence: 0.8
responsibility: seo
knowledge_type: mechanism
temporality: stateful
source: "tools/site/render-site.mjs; tools/site/normalize-post.mjs"
related:
  - static-page-addressability
  - page-metadata-contract
---

## Action

// SKILL := feed_sitemap_discovery
// Signature: CanonicalPublishedSet → DiscoveryProjectionSet

CORE := PublicationEligibility → MultiArtifactProjection → AddressConsistency

DiscoveryProjectionSet
  := FeedProjection ∪ IndexProjection ∪ CrawlerDeclaration

IneligibleContent ∩ DiscoveryProjectionSet = ∅

∀ content ∈ CanonicalPublishedSet:
  EveryDiscoveryAddress(content) = CanonicalAddress(content)

FeedIdentity(content) MUST remain stable for stable ContentIdentity
CrawlerDeclaration MUST reference the declared discovery index

Discovery artifacts MUST derive_from the same published snapshot
PartialDiscoveryProjection = FORBIDDEN
