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
// Signature: NormalizedPostSet → DiscoveryArtifactSet

CORE := PublishedPostFilter → MultiArtifactProjection → URLConsistency

PublishedPosts := NormalizedPosts where draft = FALSE
DiscoveryArtifactSet := RSS(PublishedPosts) ∪ Sitemap(PublishedPosts) ∪ Robots

DraftPosts ∩ RSS.items = ∅
DraftPosts ∩ Sitemap.urls = ∅

∀ post ∈ PublishedPosts:
  RSS.link(post) = CanonicalURL(post)
  RSS.guid(post) = CanonicalURL(post)
  Sitemap.loc(post) = CanonicalURL(post)

Robots.sitemap = SiteURL + `/sitemap.xml`
