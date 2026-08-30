---
id: output-determinism-verification
trigger: "deterministic output, second build, hash comparison, byte identical, reproducibility"
confidence: 0.8
responsibility: quality
knowledge_type: mechanism
temporality: stateful
source: "npm run build; SHA-256 comparison of generated paths"
related:
  - deterministic-site-render
  - staged-publication-rollback
---

## Action

// SKILL := output_determinism_verification
// Signature: BuildEnvironment × SourceSnapshot → RepeatabilityVerdict

CORE := SnapshotInputs → BuildTwice → CompareGeneratedHashes

EnvironmentIdentity
  := NodeVersion ∪ DependencyLock ∪ OSRelevantSemantics ∪ LocaleTimeContext

HashSet1 := SHA256(GeneratedPaths after Build1)
HashSet2 := SHA256(GeneratedPaths after Build2)

RepeatableUnderObservedEnvironment ⇔ HashSet1 = HashSet2

RepeatableUnderObservedEnvironment
  ≠ proof_of_universal_mathematical_determinism

HashMismatch ⇒ report exact generated path ∪ inspect nondeterministic input
