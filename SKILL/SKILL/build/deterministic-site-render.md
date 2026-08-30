---
id: deterministic-site-render
trigger: "render site, deterministic generator, Markdown adapter, escape HTML XML, generated documents"
confidence: 0.8
responsibility: build
knowledge_type: mechanism
temporality: stateful
source: "tools/site/render-site.mjs; tools/site/markdown-adapter.mjs; tools/site/escape.mjs"
related:
  - content-ingestion-normalization
  - static-page-addressability
  - feed-sitemap-discovery
  - blogposting-structured-data
---

## Action

// SKILL := deterministic_site_render
// Signature: FixedInputSnapshot × OutputDeclaration → DocumentMap

CORE := PureProjectionBoundary → ContextualSerialization → CompleteOutputMap

∀ value crossing OutputContext:
  Serialize(value, OutputContext)

OutputContext
  := MarkupText ∪ StructuredData ∪ DiscoveryDocument ∪ StaticAsset

DocumentMap contains exactly DeclaredOutputs(FixedInputSnapshot)

∀ public_content ∈ FixedInputSnapshot:
  DocumentMap contains Address(public_content)

NoUndeclaredOutput ∧ NoMissingDeclaredOutput
SameByteInputs ∧ SameToolchain ⇒ ExpectedSameByteDocumentMap
