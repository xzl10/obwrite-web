---
id: product-claim-ssot
trigger: "product claim, price, version, support status, requirements, BOOTH SSOT, claim sync"
confidence: 0.7
responsibility: content
knowledge_type: observation
temporality: dated
source: "BOOTH public listing snapshot; tools/site/config.mjs; _site-src/lp/index.html"
related: []
observed_at: 2026-08-30
evidence: "Public BOOTH listing and local v0.8.0 Early Access snapshot"
invalidates_on: "BOOTH listing, release version, price, requirements, or support status changes"
---

## Action

// SKILL := product_claim_ssot
// Signature: ExternalListingObservation → LocalClaimSnapshot

CORE := HumanObservation → LocalSnapshot → PublicClaimBoundary

CurrentSnapshot
  := version `0.8.0 Early Access`
   ∪ BOOTH price `¥2,800`
   ∪ Windows `10/11 64-bit`
   ∪ latest Google Chrome
   ∪ local Obsidian Vault
   ∪ Stable {X.com, Mercari, Yahoo! Flea Market, Rakuten Rakuma}
   ∪ Experimental {Reddit, Civitai}

BuildTimeFetch(ExternalListing) = FALSE

ExternalChange ⇒ SnapshotStale ⇒ HumanResynchronizationRequired
PublicClaim MUST derive_from CurrentNonStaleSnapshot
