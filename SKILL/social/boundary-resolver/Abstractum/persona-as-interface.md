---
id: persona-as-interface
trigger: "persona, mask, role, script, 台本, 演技, dramaturgy, identity, social referencing, ペルソナ, 仮面, 自己"
confidence: 0.5
domain: [social, boundary-resolver]
source: "Berne(1964); Goffman(1959); Jung; Washida(鷲田); Markus; Truby(脚本術)"
related: [formal-physical-property-disjointness, predicate-origin-scope-self-applicability, performative-contradiction, stability-core]
---

## Action

// SKILL := compiled_output (what the host emits), NOT the host's interior
// "あなたは自分で自分自身になることはできない" (Markus)

CORE := Closed(Rule) ∧ Type0_Body → [calibration] → Persona

// SETS
BODY    := Continuant.MaterialEntity (private, local, 魂の箱)
PERSONA := Abstractum (public, shared, co-constructed)
PERSONA ∩ BODY = ∅    // "物理的に実在するものは私ではない"; "「私」の中に「私」以外の要素がたっぷり"

// SCRIPT (attractor library)
SCRIPT := Abstractum.attractor                // cultural template: pre-defined basin
Library := { 親, 子, 英雄, 犠牲者, ... }        // finite (Truby, Berne); individual falls in without awareness

// CALIBRATION (formation edge → formal-loop-infection-cycle)
infant: monitor face → adjust behavior        // social referencing (stability.calibration)
adult:  monitor gaze → adjust persona         // deviation → zero (stability.deviation)

// PERFORMANCE (Occurrent)
persona := output ∘ Type1 ∘ Type0 ∘ input     // ① SYNTAX(persona) ≠ SEMANTICS(body)
character_web := coupled oscillators          // each persona calibrates against others

// BIFURCATION
"台本から降りる" := recognize basin → conscious attractor switch
