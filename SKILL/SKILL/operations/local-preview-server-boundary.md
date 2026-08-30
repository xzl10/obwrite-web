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
// Signature: HTTPRequest × GeneratedPathManifest → HTTPResponse

CORE := LocalOriginGate → PublishedPathContainment → StaticResponse

BindAddress := `127.0.0.1`
AllowedHost := { `127.0.0.1`, `localhost` }
AllowedMethod := { GET, HEAD }
PublishedSurface := config.generatedPaths

RequestPath
  → decode_or_400
  → reject_NUL_backslash_parent_segment
  → generated_allowlist_or_404
  → lexical_containment_or_404
  → realpath_containment_or_404
  → regular_file_or_404

RepositoryPrivatePath ∩ PublishedSurface = ∅
ResponseHeaders := no_store ∪ nosniff ∪ MIME
InvalidPort ∨ ListenFailure ⇒ nonzero_exit_before_ready
