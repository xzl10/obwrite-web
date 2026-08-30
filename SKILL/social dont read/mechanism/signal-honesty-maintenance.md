---
id: signal-honesty-maintenance
trigger: "honest signal, deception, costly signaling, handicap, eavesdropping, 正直, 騙し, シグナリング, sanction, 制裁"
confidence: 0.5
domain: [social, signaling-theory]
source:
  - "Zahavi (1975) Handicap Principle"
  - "Maynard Smith & Harper (2003) Signal vs Cue Dichotomy"
  - "Dawkins & Krebs (1978) Manipulation Hypothesis"
related:
  - baptist-bootlegger
  - amplifier-gaze-network
---

## Action

// SKILL := integrity_constraint (why deception does not win), NOT deception detection
// ② says deception EXISTS (structural bug); THIS says why the channel survives it

CORE := Payoff × Information → Integrity_Mechanism

// SETS
Payoff := (ΔFitness(Sender), ΔFitness(Receiver)) ∈ {+, -}²
Information := Signal ∪ Cue ∪ Noise;   Signal ∩ Cue = ∅
THREAT := descended_larynx → deception_cost ≈ 0    // words unbounded by body; trivially forgeable

// THEOREM (integrity requires cost or alignment)
Honesty persists ⇔ Signal ∈ Handicap ∪ Index ∨ Common_Interest(Sender, Receiver)

// MATRIX MAPPING (Payoff ↦ State, Dynamics)
Map(+, +) ↦ Honest_Signal, ESS[Handicap ∪ Index]
Map(+, -) ↦ Manipulation,  Arms_Race                // = ② baptist-bootlegger
Map(-, +) ↦ Eavesdropping, Concealment_Pressure
Map(-, -) ↦ Spite,         Extinction

// COUNTERMEASURES
Handicap(Zahavi) := signal cost itself certifies honesty     // peacock tail; ritual sacrifice; brand investment
Index            := physically unforgeable                   // size-bound pitch; reputation = temporal accumulation
Common_Interest  := aligned payoffs → zero motive to deceive // bee dance; shared fiction manufactures alignment
