---
id: progressive-enhancement-baseline
trigger: "progressive enhancement, no JavaScript, baseline HTML, view transition, JS disabled"
confidence: 0.8
responsibility: architecture
knowledge_type: policy
temporality: stateful
source: "_site-src/lp/index.html; _site-src/blog/templates/layout.mjs; _site-src/assets/script.js"
related:
  - static-page-addressability
---

## Action

// SKILL := progressive_enhancement_baseline
// Signature: BaselineState × EnhancementState → CapabilitySet

CORE := FunctionalBaseline → OptionalEnhancement → CapabilityMonotonicity

BaselineCapabilities
  := readable_content
   ∪ direct_navigation
   ∪ public_content_retrieval
   ∪ essential_action_access

Capabilities(Enhancement=unavailable) ⊇ BaselineCapabilities
Capabilities(Enhancement=available)
  ⊇ Capabilities(Enhancement=unavailable)

EnhancementFailure MUST NOT remove BaselineCapabilities
EnhancedCapability MUST NOT become an undeclared prerequisite
