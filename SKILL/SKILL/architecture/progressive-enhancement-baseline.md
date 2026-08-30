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
// Signature: JavaScriptState × Page → CapabilitySet

CORE := StaticHTMLBaseline → OptionalEnhancement → CapabilityMonotonicity

BaselineCapabilities
  := readable_content
   ∪ normal_navigation
   ∪ article_retrieval
   ∪ purchase_link

Capabilities(JavaScript=disabled) ⊇ BaselineCapabilities
Capabilities(JavaScript=enabled) ⊇ Capabilities(JavaScript=disabled)

JavaScriptEnhancements := locale_projection ∪ view_transition_hint

JavaScriptFailure MUST NOT remove BaselineCapabilities
