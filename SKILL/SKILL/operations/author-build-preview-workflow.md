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
  - output-determinism-verification
---

## Action

// SKILL := author_build_preview_workflow
// Signature: ApprovedWebChange → VerifiedLocalSite

CORE := EditAuthoringSource → TestBuildValidate → MultiViewportReview

Workflow
  := inspect relevant source
   → edit `_site-src/**` or `tools/site/**`
   → `npm test`
   → `npm run build`
   → `npm run validate`
   → start local static server
   → review 360px, 768px, 1280px
   → inspect generated diff

DirectEdit(GeneratedZone) = FORBIDDEN
FailedGate ⇒ stop before deployment
