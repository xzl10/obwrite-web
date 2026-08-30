# Obwrite Web Skill Format

## Frontmatter

```yaml
---
id: kebab-case
trigger: "retrieval anchors"
confidence: 0.5
responsibility: architecture | content | frontend | seo | build | quality | operations
knowledge_type: invariant | policy | mechanism
temporality: timeless | stateful
source: "repository witness or minimal literature"
related: []
---
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
SkillEligible ⇔ RelationSurvivesPlausibleImplementationChanges
MutableObservation ∪ IncidentalMarkup ∪ DefectCandidate ⊆ CodeConfigTestDocs
```

## Knowledge Discipline

```text
invariant → timeless relation; no mutable product value
policy    → reversible design choice; never label THEOREM or COROLLARY
mechanism → stable state topology, I/O boundary, failure, or rollback

FormalPredicate applied_to PhysicalTransition = CATEGORY_ERROR
MutableObservation → ExternalEvidence | Config | TestFixture | DatedDocument
VolatileImplementationLiteral ∩ ActionRelation = ∅
RepositoryPath is permitted in source metadata, not as Action ownership
PreservePremise(Line) when deletion loses identification or validity
```

Use English low-level declarative notation. Keep retrieval anchors in `trigger`; keep derivation and operational rules in `Action`. `INDEX.md` routes knowledge but never duplicates Action bodies.
