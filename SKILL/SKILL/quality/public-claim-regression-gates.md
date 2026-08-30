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
// Signature: RenderedDocuments × ClaimSnapshot → ClaimVerdict

CORE := RequiredClaimPresence → ForbiddenClaimAbsence → CardinalityChecks

ASSERT current version, price, requirements exist in landing page
ASSERT StablePlatformCount = 4
ASSERT ExperimentalPlatformCount = 2
ASSERT PlatformCards use capability arrays, not prose
ASSERT every declared capability and platform asset is present

ASSERT ForbiddenClaims ∩ RenderedDocuments = ∅

∀ article:
  InlinePurchaseCTA = 0
  BOOTH_URL_Count = 1
  JSONLD.type = BlogPosting

AnyAssertionFailure ⇒ block publication
