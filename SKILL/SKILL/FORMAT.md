# Obwrite Web Skill Format

## Frontmatter

```yaml
---
id: kebab-case
trigger: "retrieval anchors"
confidence: 0.5
responsibility: architecture | content | frontend | seo | build | quality | operations
knowledge_type: invariant | policy | mechanism | observation
temporality: timeless | stateful | dated
source: "repository evidence, public snapshot, or minimal literature"
related: []
---
```

Observation skills additionally require:

```yaml
observed_at: YYYY-MM-DD
evidence: "verifiable source"
invalidates_on: "explicit refresh condition"
```

## Action Contract

```text
## Action

// SKILL := identifier
// Signature: Input → Output

CORE := one central relation
```

## Invariants

```text
one skill = one central relation = one reason to change
responsibility = parent directory
id = filename without extension
related ⊆ direct dependencies
DependencyGraph(skills) is acyclic
TraversalDepth(related) <= 1
ActionSectionCount = 1
CoreRelationCount = 1
PreferredLineCount <= 40
```

## Knowledge Discipline

```text
invariant  → timeless relation; no mutable product value
policy     → reversible design choice; never label THEOREM or COROLLARY
mechanism  → state, transition, I/O, failure, or rollback
observation→ dated evidence with explicit invalidation

FormalPredicate applied_to PhysicalTransition = CATEGORY_ERROR
PhysicalParameter ∈ {version, price, breakpoint, filesystem state, external status}
PhysicalParameter MUST NOT be promoted to timeless invariant
```

Use English low-level declarative notation. Keep retrieval anchors in `trigger`; keep derivation and operational rules in `Action`. `INDEX.md` routes knowledge but never duplicates Action bodies.
