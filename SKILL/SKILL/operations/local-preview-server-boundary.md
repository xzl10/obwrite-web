---
id: local-preview-server-boundary
trigger: "local preview server, localhost, path traversal, generated allowlist, HTTP method, PORT"
confidence: 0.8
responsibility: operations
knowledge_type: mechanism
temporality: stateful
source: "tools/site/serve.mjs; tools/site/serve.test.mjs; tools/site/config.mjs"
related:
  - authoring-generated-zone-ownership
  - generated-link-asset-integrity
---

## Action

// SKILL := local_preview_server_boundary
// Signature: LocalPreviewRequest × PublishedManifest → HTTPResponse

CORE := LocalOriginGate → PublishedSurfaceContainment → StaticResponse

ListenerScope := loopback_only
AllowedAuthority MUST resolve_to ListenerScope
AllowedMethod := safe_static_retrieval_methods
PublishedSurface := PublishedManifest

RequestPath
  → decode_or_client_error
  → reject_ambiguous_or_parent_segments
  → manifest_membership_or_not_found
  → lexical_containment_or_not_found
  → resolved_containment_or_not_found
  → regular_artifact_or_not_found

RepositoryPrivateSurface ∩ PublishedSurface = ∅
Response MUST declare safe content semantics
ListenConfigurationFailure ⇒ fail_before_ready
