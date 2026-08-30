---
id: semantic-accessibility-baseline
trigger: "semantic HTML, accessibility, alt text, skip link, heading, navigation label"
confidence: 0.8
responsibility: frontend
knowledge_type: policy
temporality: timeless
source: "_site-src/lp/index.html; _site-src/blog/templates/layout.mjs"
related:
  - progressive-enhancement-baseline
---

## Action

// SKILL := semantic_accessibility_baseline
// Signature: UIElementTree → AccessibleStructure

CORE := SemanticRole → SingleAccessibleName → KeyboardReachability

Document MUST contain one main landmark
RepeatedNavigation MUST expose aria-label
SkipLink MUST target main landmark
HeadingOrder MUST preserve content hierarchy

DecorativeBrandImage adjacent_to NamedHeading
  ⇒ alt = empty
  ⇒ NamedHeading owns accessible name

InteractiveElement MUST use native interactive semantics
Information MUST NOT depend_on color alone
FocusTarget MUST remain keyboard reachable
