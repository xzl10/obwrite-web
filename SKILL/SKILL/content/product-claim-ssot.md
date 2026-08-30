---
id: product-claim-ssot
trigger: "product claim, price, version, support status, requirements, BOOTH SSOT, claim sync"
confidence: 0.7
responsibility: content
knowledge_type: policy
temporality: timeless
source: "tools/site/config.mjs; _site-src/lp/index.html; tools/site/validate-generated-site.mjs"
related: []
---

## Action

// SKILL := product_claim_ssot
// Signature: MutableClaimSet × ProjectionSet → ClaimOwnershipMap

CORE := AuthoritativeClaimOwner → DerivedProjection → InvalidationBoundary

∀ claim ∈ MutableClaimSet:
  ∃! owner ∈ AuthoritativeSources: Owns(owner, claim)

Projection(claim) ≠ Owner(claim)
Projection MUST derive_from AuthoritativeValue(claim)

AuthoritativeValueChange(claim)
  ⇒ Invalidate(AllDependentProjections(claim))
  ⇒ HumanVerifiedResynchronization

BuildTimeFetch(ExternalAuthority) = FALSE
PartialProjectionUpdate = FORBIDDEN
