---
id: external-ssot-resynchronization
trigger: "sync BOOTH, update price, version release, support change, external SSOT"
confidence: 0.7
responsibility: operations
knowledge_type: mechanism
temporality: stateful
source: "BOOTH public listing; tools/site/config.mjs; _site-src/lp/index.html"
related:
  - product-claim-ssot
  - public-claim-regression-gates
---

## Action

// SKILL := external_ssot_resynchronization
// Signature: VerifiedExternalChange × LocalClaimSnapshot → SynchronizedSite

CORE := ObserveExternalChange → UpdateAllClaimProjections → VerifyConsistency

ChangeSet
  := version ∪ price ∪ purchase_URL ∪ requirements
   ∪ delivery_contents ∪ support_status ∪ capability_scope

For each changed claim:
  update config when structurally owned there
  update authoring copy and locale projection
  update dated evidence metadata
  update regression expectations
  regenerate and validate

BuildTimeNetworkFetch = FALSE
UnverifiedExternalValue ⇒ DEFER
PartialClaimUpdate ⇒ FAIL consistency gate
