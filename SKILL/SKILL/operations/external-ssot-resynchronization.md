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
// Signature: VerifiedAuthorityChange × ClaimDependencyGraph → SynchronizedProjectionSet

CORE := VerifyAuthorityChange → InvalidateDependents → UpdateOwnedProjections → VerifyConsistency

For each changed claim:
  resolve authoritative owner
  enumerate active dependent projections
  update each projection through its mutation owner
  update derived validation expectations
  regenerate published artifacts
  verify dependency-graph consistency

AbsentProjection is not an update target
BuildTimeAuthorityFetch = FALSE
UnverifiedAuthorityValue ⇒ DEFER
PartialDependentUpdate ⇒ FAIL consistency gate
