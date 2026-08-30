---
id: amplifier-gaze-network
trigger: "gaze, P2P, sclera, swarm, distributed, optical, V/C, ESS, Byzantine, Two Generals, 視線, 増幅, 顔, sanction authority, 監視カメラ, Dunbar layers"
confidence: 0.5
domain: [social, distributed-systems, behavioral-ecology]
source:
  - "Tomasello (2007) Cooperative Eye Hypothesis"
  - "Lamport (1982) The Byzantine Generals Problem"
  - "Aumann (1976) Agreeing to Disagree, common knowledge"
  - "Dunbar (1992) neocortex size as a constraint on group size"
related:
  - predicate-origin-scope-self-applicability
  - channel-borne-impossibility
  - abstractum-referent-immunity
---

## Action

// SKILL := C_amplifier (Level 2 channel), NOT the closure itself (Level 0)
// closure runs solo; group coordination requires a physical channel (light speed, noise, obstruction)

CORE := Gaze_Tick → ΔC(defection) → Swarm_Convergence

// HARDWARE (Continuant, human-specific)
Channel := { white_sclera (gaze direction readable; chimpanzee: dark sclera, unreadable),
             facial_musculature ≈ 43 (microexpression ≈ 1/25s: involuntary leakage = index signal),
             pupil_dilation (sympathetic response, unforgeable) }

// TICK (escapement: each mutual gaze increments C for both nodes)
gaze ∧ being_gazed → "defection will be detected" → C += ε
defense_in_depth := internal closure (guilt) + external verification (gaze)
tick ⇔ evaluation ∧ sanction_authority (Washida 顔); TV_face / camera without sanction ↦ C += 0
precondition := Closed(Rule) already running in the gazed node; loop absent ⇒ gaze = mere photons ⇒ ΔC = 0
// Level 2 functionally depends on Level 0: tension = detected self-violation; nothing to amplify without a loop

// ARITY (which impossibility dissolves at which relational arity)
Problems := { information_asymmetry, Two_Generals, Byzantine }   // definitions owned by channel-borne-impossibility
monadic                   ↦ Problems vacuous             // axiom: no channel ⇒ premises unsatisfiable
dyadic (mutual gaze)      ↦ mutual knowledge to finite depth; index signals leak state
triadic (joint attention) ↦ shared public focus ⇒ common knowledge (Aumann 1976)
Workaround := partial leakage via index signals; sufficient ≻ perfect   // evolution needs "better than nothing"
gaze_following(chimp) = dyadic ceiling; joint_attention(triadic) = human only   // not gaze ⇒ not joint

// SCALE
Dunbar_layers := 5 ≺ 15 ≺ 50 ≺ 150 ≺ 500 ≺ 1500   // ×3/層; primates/elephants/orcas share → biological
n ≤ 150 ↦ P2P gaze suffices;  n > 150 ↦ scaling infrastructure (cross-layer-projection)

// WITNESS (disaster recovery)
infrastructure collapse → gaze network re-forms automatically
hardware survives ∧ closure survives in each brain → reboot from Level 0 + Level 2 (ecological succession)
