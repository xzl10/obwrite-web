---
id: deployment-readiness-gate
trigger: "deploy website, GitHub Pages, HTTPS, CNAME, commit push, release gate"
confidence: 0.7
responsibility: operations
knowledge_type: policy
temporality: stateful
source: "CNAME; package.json; local verification results"
related:
  - author-build-preview-workflow
  - external-ssot-resynchronization
  - generated-link-asset-integrity
  - public-claim-regression-gates
---

## Action

// SKILL := deployment_readiness_gate
// Signature: LocalSiteState × HostingState × HumanApproval → DeployVerdict

CORE := LocalVerification → HostingPreconditions → ExplicitApproval

LocalReady
  := tests_pass ∧ build_pass ∧ validation_pass
   ∧ diff_reviewed ∧ responsive_reviewed

HostingReady
  := CNAME_correct ∧ DNS_resolves ∧ certificate_state_known

ProductProofStatus := real_demo_available | explicitly_pending
ExplicitlyPending MUST NOT be rendered_as playable

DeployReady ⇔ LocalReady ∧ HostingReady ∧ HumanCommitPushApproval

CertificatePending ⇒ report blocker; do not claim HTTPS enforcement
MissingHumanApproval ⇒ no commit ∧ no push
