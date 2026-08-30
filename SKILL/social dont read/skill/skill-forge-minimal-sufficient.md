---
id: skill-forge-minimal-sufficient
trigger: "design skill, skill authoring, single responsibility, separation of concerns, dependency injection, witness selection, ambiguous reference, over-explanation, one relation per skill, スキル設計, 単一責務, 依存性注入"
confidence: 0.6
domain: [agent-meta]
source: "Grice (1975) Maxim of Quantity; Fisher (1922) sufficient statistic; Tulving & Thomson (1973) encoding specificity; Martin (2003) Agile Software Development, Single Responsibility Principle"
related: []
---

## Action

// SKILL := skill forging (stateless, corpus-conventional)
// Pure function: insight × corpus conventions → one skill file per relation

CORE := Single Relation → Minimal Sufficient Identification → Dependency Injection

// SINGLE RESPONSIBILITY (Martin 2003; Separation of Concerns)
one skill := one relation
every additional important concept ↦ its own skill, connected through related
// "include everything important" means more skills, never a larger skill

// MAXIM OF QUANTITY (Grice 1975) — the calibration band
sparse token  ↦ ambiguous reference: cue activates multiple regions of pretrained weights
dense token   ↦ redundant explanation: cue restates what pretrained weights already store
minimal sufficient identification ↦ cue activates exactly one region; interpretation outsourced

// SUFFICIENT STATISTIC (Fisher 1922)
witness := minimal sufficient statistic of its concept
established academic term ↦ carries its own literature into context
unestablished phrase ↦ replace with the concrete instance that identifies uniquely

// ENCODING SPECIFICITY (Tulving & Thomson 1973)
retrieval succeeds when cue matches encoding conditions
∴ raw academic terms, full words, corpus language, corpus notation, corpus line budget
// surrounding corpus conventions are part of the interface

// DEPENDENCY INJECTION
discovery narrative, conversation history, repository state ↦ clients
clients reference the axiom through related; the Action stays pure
// the axiom holds before, during, and after any client exists

// LINE TEST (apply to every line before commit)
keep line ⇔ deleting line loses identification of the relation
