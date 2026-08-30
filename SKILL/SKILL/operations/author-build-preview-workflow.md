---
id: author-build-preview-workflow
trigger: "edit website, local preview, author workflow, responsive review, build site"
confidence: 0.8
responsibility: operations
knowledge_type: mechanism
temporality: stateful
source: "package.json; _site-src/**; tools/site/build-site.mjs"
related:
  - authoring-generated-zone-ownership
  - staged-publication-rollback
  - generated-link-asset-integrity
  - local-preview-server-boundary
---

## Action

// SKILL := author_build_preview_workflow
// Signature: ApprovedAuthoringChange × VerificationDeclaration → ReviewedSite

CORE := MutateOwnedSource → ExecuteDeclaredGates → ReviewPublishedProjection

Workflow
  := inspect ownership and relevant witnesses
   → mutate only the resolved owner
   → execute declared tests
   → build complete published projection
   → validate generated graph and public contracts
   → review representative geometry classes
   → inspect semantic generated diff

DirectMutation(GeneratedProjection) = FORBIDDEN
FormattingOnlyDiff ≠ SemanticDiff
FailedGate ⇒ stop before deployment
