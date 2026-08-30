---
id: responsive-information-density
trigger: "responsive layout, mobile, breakpoint, overflow, information density, support columns"
confidence: 0.7
responsibility: frontend
knowledge_type: mechanism
temporality: stateful
source: "_site-src/assets/style.css; _site-src/assets/platforms.css"
related:
  - semantic-accessibility-baseline
---

## Action

// SKILL := responsive_information_density
// Signature: AvailableGeometry × InformationSet → LayoutProjection

CORE := MeasureAvailableGeometry → ReflowPresentation → PreserveMeaning

LayoutProjection MUST adapt geometry at declared constraints
ConstraintValue is an implementation parameter, not knowledge

Reflow MUST preserve
  content ∪ status ∪ capability ∪ action_meaning

UnintendedOverflow = FALSE within supported geometry
HideInformationToFit = FORBIDDEN

CompactLayout MAY reduce spacing ∪ change arrangement
CompactLayout MUST NOT delete decision-relevant information
PresentationGeometry ≠ InformationIdentity
