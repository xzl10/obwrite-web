---
id: formal-axion-skill-forge
trigger: "create axion skill, formal invariant, theorem validity, axion blueprint, stateless formal skill, 公理スキル, 形式的不変量, 定理妥当性"
confidence: 0.7
domain: [agent-meta, ontology, software-architecture]
source: "Tarski (1936) logical consequence; Martin (2003) Single Responsibility Principle; Fisher (1922) sufficient statistic"
related:
  - skill-forge-minimal-sufficient
  - ontology-triage-modal-classifier
  - modal-possibility-nesting
---

## Action

// SKILL := formal_axion_skill_forge (stateless, project-agnostic)
// Pure function: CandidateInsight × ExistingAxionSet → AxionBlueprintOrDeferredPlacement
// Owns ONLY axion qualification. Delegates general compression to skill-forge-minimal-sufficient.

CORE := FormalQualification → ValidityCheck → OwnershipCheck → MinimalBlueprint

// QUALIFICATION (necessary conditions)
FormalQualification
  := Stateless
     ∩ FormalDomain
     ∩ ExplicitlyDefinedTerms
     ∩ IndependentOfEmpiricalPremises

// VALID FORMAL RELATIONS (sufficient conditions for the relation itself)
ValidFormalRelation
  := Definition
     ∪ LogicalConsequence
     ∪ SetTheoreticInvariant
     ∪ TypeTheoreticInvariant
     ∪ FormallyProvedImpossibility

// AXION CANDIDATE (intersection)
AxionCandidate
  := FormalQualification
     ∩ ValidFormalRelation
     ∩ SingleRelation
     ∩ NonDuplicativeOwnership

// LABEL DISCIPLINE
DefinitionLabel applies when the biconditional introduces a term.
TheoremLabel applies when the conclusion follows from independently stated premises.
CorollaryLabel applies when the conclusion follows directly from an existing axion.

// LEXICAL DISCIPLINE (outsource to declarative memory)
EstablishedAcademicTerminology
  := preferred lexical representation of each concept

FormalSymbol
  := secondary representation after the academic term is introduced

PositiveApplicability
  := conditions under which the relation is defined and composable

// SEPARATION FROM CLIENT KNOWLEDGE
ClientKnowledge
  := discovery narrative ∪ empirical evidence ∪ mechanism behavior ∪ repository history

AxionAction ∩ ClientKnowledge = ∅

RelatedIdentifiers
  := minimal dependency injection ports required by the formal derivation

DependencyGraph(ExistingAxionSet ∪ AxionCandidate) is acyclic

// ONE_WAY_DOOR REVIEW (YAGNI does NOT apply)
OneWayDoorReview
  := stable identifier
     ∩ single ownership
     ∩ explicit input domain
     ∩ explicit output relation
     ∩ countermodel review

// OUTPUT
MinimalBlueprint
  := Frontmatter
     ∪ PureFunctionSignature
     ∪ DefinedTerms
     ∪ OneFormalRelation
     ∪ MinimalAcademicSource
     ∪ RelatedIdentifiers

LineNecessity(Line)
  ⇔ removing Line loses identification or validity of the single formal relation

DeferredPlacement
  := highest-affinity TWO_WAY_DOOR layer for candidates outside AxionCandidate

// AFFIRMATIVE ROUTING (no GUARD/REJECT; soft routing instead)
TemporalStateTransition ⊆ MechanismAffinity
EmpiricalParameterVariation ⊆ PhenomenonAffinity
RoutingProcedure ⊆ MetaAffinity
FormalInvariant ⊆ AxionAffinity
