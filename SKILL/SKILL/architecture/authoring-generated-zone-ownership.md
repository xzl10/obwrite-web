---
id: authoring-generated-zone-ownership
trigger: "source generated boundary, edit source, generated root, _site-src, public root, authoring zone"
confidence: 0.8
responsibility: architecture
knowledge_type: policy
temporality: timeless
source: "_site-src/**; tools/site/config.mjs; tools/site/write-site.mjs"
related: []
---

## Action

// SKILL := authoring_generated_zone_ownership
// Signature: Artifact × OwnershipDeclaration → MutationOwner

CORE := ArtifactClassification → SingleOwner → AuthorizedMutationRoute

ArtifactClass
  := AuthoringSource ∪ BuildMechanism ∪ GeneratedProjection

∀ artifact:
  ∃! owner: Owns(owner, artifact)

AuthoringSource ∩ GeneratedProjection = ∅
BuildMechanism transforms AuthoringSource into GeneratedProjection

RequestedMutation(GeneratedProjection)
  ⇒ Resolve(CorrespondingAuthoringSource ∪ BuildMechanism)
  ⇒ Mutate(ResolvedOwner)
  ⇒ Regenerate

UnknownArtifact ⇒ Inspect(OwnershipDeclaration) before mutation
