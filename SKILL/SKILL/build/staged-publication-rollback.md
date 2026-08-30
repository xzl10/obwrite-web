---
id: staged-publication-rollback
trigger: "publish site, stage, backup, rollback, EXDEV, generated paths, atomic publish"
confidence: 0.9
responsibility: build
knowledge_type: mechanism
temporality: stateful
source: "tools/site/write-site.mjs; tools/site/config.mjs"
related:
  - authoring-generated-zone-ownership
  - deterministic-site-render
---

## Action

// SKILL := staged_publication_rollback
// Signature: DocumentMap × StaticAssets × GeneratedPathManifest → PublishResult

CORE := CompleteStage → PerPathBackupReplace → ReverseRollbackOnFailure

State := EmptyStage → StageReady → BackupReady → Replacing[n]
State → Published on all generated paths replaced
State → RollingBack on any replacement failure
RollingBack → Restored by reverse(replaced_paths)

Move(primary) := filesystem.rename
Move(EXDEV) := recursive_copy then remove_source

Cleanup := remove(stage) ∪ remove(backup)
Cleanup executes after Published or Restored

Guarantee := rollback_capable_staged_multi_path_publish
Guarantee ≠ site_wide_atomic_switch
