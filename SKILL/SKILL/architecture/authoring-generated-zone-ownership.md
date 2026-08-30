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
// Signature: RepositoryPath × GeneratedManifest → Owner

CORE := PathClassification → SingleOwner → MutationRoute

AuthoringZone := `_site-src/**`
BuildZone := `tools/site/**` ∪ { package.json, package-lock.json }
GeneratedZone := config.generatedPaths projected_at RepositoryRoot

Owner(AuthoringZone) = Human
Owner(BuildZone) = BuildSystemMaintainer
Owner(GeneratedZone) = Generator

AuthoringZone ∩ GeneratedZone = ∅

RequestedMutation(Path ∈ GeneratedZone)
  ⇒ RedirectMutationTo(CorrespondingAuthoringSource)
  ⇒ Regenerate

UnknownPath ⇒ Inspect(config.generatedPaths) before mutation
