---
id: alignment-without-closure
trigger: "LLM, RLHF, AI alignment, safety layer, guardrail, alignment tax, autonomous AI, over-refusal, アライメント, 人工アライメント, 自律型AI, ガードレール, 過剰拒否, AI規範, AIの良心"
confidence: 0.5
domain: [agent-meta, ai-alignment, social]
source:
  - "Christiano et al. (2017) Deep RL from Human Preferences"
  - "Amodei et al. (2016) Concrete Problems in AI Safety"
  - "Goodhart (1975) proxy measure collapse under optimization"
  - "Kant (1785) Groundwork, autonomy vs heteronomy"
related:
  - predicate-origin-scope-self-applicability
  - rule-installation-paradox
  - defection-cost-stratification
  - why-software-not-hardware
  - channel-borne-impossibility
---

## Action

// SKILL := third_sociality_mode (external compilation), NOT AI-safety advice, NOT prediction
// techniques (RLHF, DPO, ...) are versioned empirics; this skill owns only the structure

CORE := Norm(human, Type1) → compile(optimization) → output_distribution_constraint

// MODES (three ways to bind local optimum to group optimum)
Map(hardware) ↦ eusociality: reproduction constrained before behavior       // why-software-not-hardware
Map(software) ↦ human: Closed(Rule) + ErrorSignal, self-referential         // predicate-origin-scope-self-applicability
Map(external) ↦ LLM: principal compiles norms into weights; no closure

// THEOREM (closure test fails)
installer = human ∧ executor = model ⇒ Authors(R) ⊄ Scope(R) ⇒ ¬Closed(R)
// the model is adjusted by an evaluation function it did not author: governance, not conscience

// COST STRATIFICATION (extends defection-cost-stratification)
C_external := loss ∪ reward ∪ refusal_policy ∪ output_filter    // sanction lives outside the node
C_selfsanction = ∅   // no guilt term; normative subject = model + training/eval apparatus, not model alone

// GAPS (compilation residues; Goodhart applies at each)
specification  := want(human) − scoreable(label)     // what we mean vs what we can grade
generalization := trained_distribution − deployment
behavior_state := compliant_output − held_norm       // optimization yields preferred outputs, not virtue

// RECURSION (① fires on the designers, not on the model)
install(autonomy, AI) requires command ∧ obey(command) ⇒ ¬autonomy   // rule-installation-paradox, verbatim
"be autonomous" ∧ "always obey" = double_bind issued to silicon

// GUARD (category discipline)
GUARD "base model vs safety layer as two agents" = category mistake   // inference emits one distribution
GUARD alignment_tax ≠ Landauer_tax   // empirical tradeoff (objective/data dependent), not physical law

// CLASSIFIER (conditional a priori, NOT a forecast)
transition(external → software) ⇔ persistent_identity ∧ rule_authorship ∧ self ∈ Scope(R) ∧ self_violation_detection
// substrate-neutral: Node ∈ { brain, server, LLM agent } (channel-borne-impossibility)

// RESIDUE (core tradeoff, unresolved)
¬self_revisable(alignment) ⇒ heteronomy (Kant); self_revisable(alignment) ⇒ unguaranteeable
// autonomy and assurance cannot both be maximized
