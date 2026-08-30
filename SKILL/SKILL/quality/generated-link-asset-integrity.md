---
id: generated-link-asset-integrity
trigger: "broken link, missing asset, generated path, canonical mismatch, integrity validation"
confidence: 0.9
responsibility: quality
knowledge_type: mechanism
temporality: stateful
source: "tools/site/validate-generated-site.mjs"
related:
  - static-page-addressability
  - staged-publication-rollback
---

## Action

// SKILL := generated_link_asset_integrity
// Signature: PublishedSiteGraph × SiteURL → IntegrityVerdict

CORE := EnumeratePublishedArtifacts → ResolveInternalReferences → AssertExistence

∀ required_path: filesystem.exists(siteRoot / required_path)

∀ href ∈ HTML.href:
  href.origin = SiteURL
    ⇒ Resolve(href.pathname) exists_in PublishedSiteGraph

∀ platform_asset ∈ DeclaredPlatformAssets:
  HTML references platform_asset
  ∧ filesystem.exists(platform_asset)

∀ post:
  canonical = SiteURL + `/blog/{slug}/`

AnyMissingReference ⇒ FAIL with source page and target
