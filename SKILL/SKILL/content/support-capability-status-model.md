---
id: support-capability-status-model
trigger: "supported sites, experimental sites, capability tags, platform cards, stable experimental"
confidence: 0.7
responsibility: content
knowledge_type: policy
temporality: timeless
source: "_site-src/lp/index.html; _site-src/assets/platforms.css"
related:
  - product-claim-ssot
---

## Action

// SKILL := support_capability_status_model
// Signature: PlatformSnapshot → SupportPresentation

CORE := SupportStatusPartition → CapabilityArray → ConstraintVisibility

Stable := PlatformSnapshot.stable
Experimental := PlatformSnapshot.experimental
Stable ∩ Experimental = ∅

∀ platform ∈ Stable ∪ Experimental:
  Render(platform.name, platform.capabilities)

∀ platform ∈ Experimental:
  Render(platform.constraints)

Presentation := StableColumn ∪ ExperimentalColumn
PlatformDescription := CapabilityArray

PlatformCardLinkToThirdParty = FALSE
ExperimentalConstraintVisibility = REQUIRED
