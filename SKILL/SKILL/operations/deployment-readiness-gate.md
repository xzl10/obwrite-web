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
// Signature: LocalVerificationState × HostingPreconditionSet × HumanApproval → DeployVerdict

CORE := LocalVerification → HostingPreconditions → ExplicitApproval

LocalReady
  := declared_tests_pass
   ∧ complete_build_pass
   ∧ generated_validation_pass
   ∧ semantic_diff_reviewed
   ∧ representative_presentation_reviewed

HostingReady := every declared hosting precondition is verified

DeployReady
  ⇔ LocalReady ∧ HostingReady ∧ ExplicitHumanApproval

UnknownHostingState ⇒ report blocker
MissingHumanApproval ⇒ no repository_or_deployment_mutation
FailedLocalGate ⇒ no deployment side effect
