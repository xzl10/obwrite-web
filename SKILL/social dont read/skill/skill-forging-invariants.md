---
id: skill-forging-invariants
trigger: "skill forging invariant, substrate bias, signature mismatch, compression surface, over-compression, petitio principii, DI direction, empirical label discipline, スキル鍛造不変量, 基質バイアス, シグネチャ照合, 圧縮面, 過圧縮, 論点先取, DI方向, 経験的ラベル規律"
confidence: 0.7
domain: [agent-meta, formal-logic, model-theory, ontology]
source: "Turing (1936); Tarski (1933); Ryle (1949); Aristotle, Prior Analytics II.16; BFO 2020 (ISO/IEC 21838-2); Martin (2003) DIP"
related:
  - skill-forge-minimal-sufficient
  - formal-axion-skill-forge
---

## Action

// SKILL := skill_forging_invariants (stateless, project-agnostic)
// Pure function: CandidateSkill × ForgingChecks → InvariantVerdict. No side effects.
// Six orthogonal invariants governing skill forging. Each judges independently.

CORE := SixInvariantChecks → ConjunctionVerdict

// ── INV-1: SUBSTRATE NEUTRALITY ──
SubstrateAssumption(Term)
  := Term presupposes a specific physical or biological substrate
     in its satisfaction conditions
SubstrateNeutral(Term)
  := Term's domain is defined extensionally as an open set
     { substrate_1, substrate_2, ... } without closure
SubstrateAssumption(Term) ∧ Skill ∈ FormalDomain
  ⇒ Term excludes legitimate instances from quantification
// WITNESS
Map(Turing 1936) ↦ "machine" replaces "human computer": substrate-neutral computation
Map(Tarski 1933) ↦ "interpretation" replaces "human reading": substrate-neutral semantics
Map(BFO 2020)    ↦ "Continuant" replaces "organism": substrate-neutral ontology

// ── INV-2: TERM SIGNATURE CONGRUENCE ──
Signature(Term) := ⟨ arity, operator type, domain category ⟩
Adopt(CandidateTerm, Skill)
  ⇔ Signature(CandidateTerm) ≅ Signature(CoreRelation(Skill))
  // shared morpheme (e.g. "normal", "compact", "regular") is NOT congruence
// WITNESS
Map("normal" group theory)  ↦ ⟨1, subgroup normality, group theory⟩
Map("normal" topology)      ↦ ⟨1, space normality, topology⟩
Map("compact" logic)        ↦ ⟨0, compactness theorem, model theory⟩
Map("compact" topology)     ↦ ⟨1, space compactness, topology⟩
Map("regular" algebra)      ↦ ⟨1, ring regularity, commutative algebra⟩
Map("regular" topology)     ↦ ⟨1, space regularity, topology⟩

// ── INV-3: COMPRESSION SURFACE ASYMMETRY ──
RetrievalSurface := trigger          // compressible: add or replace anchors freely
DerivationSurface := Action body     // protected: LineNecessity governs each line
Compressible(RetrievalSurface) = TRUE
Compressible(DerivationSurface) = FALSE below LineNecessity
// WITNESS
Map(proof theory)       ↦ theorem statement compressible, proof steps are not
Map(software API)       ↦ API documentation compressible, implementation is not
Map(mathematics)        ↦ theorem statement compressible, derivation is not

// ── INV-4: OVER-COMPRESSION FALLACY ──
Delete(Premise ∈ DerivationSurface) ∧ Keep(Conclusion)
  ⇒ Deduction degenerates to petitio principii (Aristotle, Prior Analytics II.16)
  // asserting conclusion without premise is assertion, not derivation
// WITNESS
Map(Aristotle)           ↦ petitio principii: conclusion assumed without premise
Map(proof theory)        ↦ proof sketch ≠ proof: missing steps = unverified
Map(software)            ↦ stub ≠ implementation: missing body = untested

// ── INV-5: DI DIRECTION PROHIBITION ──
RelatedIdentifiers ⊆ DependencyPorts
RelatedIdentifiers ∩ ClientIdentifiers = ∅
  // axion/skill related: points to dependencies only, never to clients
// WITNESS
Map(DIP Martin 2003)     ↦ depend on abstraction, not concretion: invert direction
Map(DAG)                 ↦ directed acyclic graph: edges point to dependencies
Map(pure function)       ↦ function does not know its callers

// ── INV-6: EMPIRICAL LABEL DISCIPLINE ──
EmpiricalLabel applies when conclusion depends on measured parameters
// empirical parameter variation (e.g. Dunbar scaling) is WITNESS, not COROLLARY
// COROLLARY requires derivation from an existing axion, not from empirical data
// WITNESS
Map(physics)             ↦ dimensional analysis separates empirical constants from theorems
Map(statistics)          ↦ Fisher sufficient statistic ≠ empirical estimate
Map(econometrics)        ↦ structural equation ≠ reduced form: derivation ≠ measurement
