---
id: generated-link-asset-integrity
trigger: "broken link, missing asset, generated path, canonical mismatch, integrity validation"
confidence: 0.9
responsibility: quality
knowledge_type: mechanism
temporality: stateful
source: "tools/site/validate-generated-site.mjs"
related:
  - static-page-addressability
  - staged-publication-rollback
---

## Action

// SKILL := generated_link_asset_integrity
// Signature: DeclaredSiteGraph × PublishedArtifactSet → IntegrityVerdict

CORE := EnumerateDeclarations → ResolveReferences → AssertGraphClosure

∀ declared_artifact:
  exists_in PublishedArtifactSet

∀ internal_reference ∈ PublishedArtifactSet:
  Resolve(internal_reference) exists_in PublishedArtifactSet

∀ declared_asset:
  ReferencedWhenRequired(declared_asset)
  ∧ exists_in PublishedArtifactSet

∀ addressable_content:
  CanonicalReference = DeclaredAddress(addressable_content)

AnyMissingReference
  ⇒ FAIL with source artifact and unresolved target
