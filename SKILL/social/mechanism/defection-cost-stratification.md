---
id: defection-cost-stratification
trigger: "why do people comply, disaster looting, reconvergence, deterrence, p = V/C, ESS, 再収束, 極相, 復元力, 攪乱, vigilantism, third-party punishment, 自警主義"
confidence: 0.5
domain: [social, evolutionary-game-theory, criminology]
source:
  - "Maynard Smith & Price (1973) The Logic of Animal Conflict"
  - "Becker (1968) Crime and Punishment: An Economic Approach"
  - "Fehr & Gächter (2002) Altruistic Punishment in Humans"
  - "Holling (1973) Resilience and Stability of Ecological Systems"
related:
  - minimal-sufficient-configuration
  - predicate-origin-scope-self-applicability
  - amplifier-gaze-network
---

## Action

// SKILL := cost_function_stratification, NOT moral explanation
// Abstractum bears no disposition: a rule moves nobody; it sets the terms of C

CORE := Sanction_Sources → C(defection) → p = V / C → observed compliance

// SETS (each term owned by one layer)
C(defection) := C_institution + C_reputation + C_selfsanction
C_institution  := imprisonment ∪ fine ∪ exclusion by authority     // cross-layer-projection
C_reputation   := ostracism ∪ lost exchange partners               // amplifier-gaze-network
C_selfsanction := guilt ∪ shame                                    // predicate-origin-scope-self-applicability
V := payoff of defection

// COUNTERWITNESS (Level 0 has causal force against the institution)
vigilantism := C_institution perceived broken ↦ host runs punishment solo at own cost
// Fehr & Gächter 2002 third-party punishment: the loop enforces C against the layer that owns C
// symmetrical witness to Robinson_Crusoe (closure persists with zero observers)

// THEOREM (crime as equilibrium deviation)
C ≫ V ⇔ p ≈ 0                    // observed compliance
V < C  ⇔ p = V / C ∈ (0, 1)      // mixed ESS: deviation rate is predicted, not failure
V ≥ C  ⇔ p = 1                   // deterrence absent

// ABLATION LADDER (natural experiments; one term removed per rung)
Map(large_society)                  ↦ all terms present ⇒ overdetermined; identification fails
Map(disaster)                       ↦ C_institution removed ⇒ looting; other terms persist
Map(reconvergence)                  ↦ C_institution still absent, order returns ⇒ institution = amplifier
Map(early_band ∪ post_apocalypse)   ↦ C_institution never present ⇒ order crystallizes de novo
Map(single_node)                    ↦ C_reputation removed ⇒ rules persist ⇒ C_selfsanction = Core

// RESTORATION (type discipline per stability-attractor-forge)
resilience := disposition inhering in surviving brains       // distributed storage, no central server
recovery   := process: pioneer defection → climax compliance // ecological succession
basin      := model                                          // attractor is a set, not a puller
