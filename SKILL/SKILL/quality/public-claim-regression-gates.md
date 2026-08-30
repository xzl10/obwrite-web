---
id: public-claim-regression-gates
trigger: "claim validation, forbidden claim, support count, CTA count, SSOT regression"
confidence: 0.9
responsibility: quality
knowledge_type: mechanism
temporality: stateful
source: "tools/site/validate-site.mjs; tools/site/validate-generated-site.mjs"
related:
  - product-claim-ssot
  - selective-outcome-disclosure
  - decision-stage-action-ownership
  - support-capability-status-model
---

## Action

// SKILL := public_claim_regression_gates
// Signature: RenderedDocuments × ClaimExpectationSet → ClaimVerdict

CORE := RequiredPresence → ForbiddenAbsence → DeclaredCardinality

∀ expectation ∈ ClaimExpectationSet:
  Required(expectation) ⇒ PresentInOwnedProjection(expectation)
  Forbidden(expectation) ⇒ AbsentFromAllPublicProjections(expectation)

RenderedCardinality(claim_class)
  = DeclaredCardinality(claim_class)

RenderedClaim MUST derive_from AuthoritativeClaimOwner
EveryDeclaredCapabilityAndAsset MUST be represented where required

ValidationExpectation ≠ AuthoritativeClaimOwner
AnyAssertionFailure ⇒ block publication
