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
// Signature: ViewportClass × ContentSet → LayoutProjection

CORE := MeasureAvailableWidth → ReflowGeometry → PreserveInformation

WideViewport → multi_column_projection
NarrowViewport → single_column_projection
SupportMatrix := two_columns when width > current_support_breakpoint
SupportMatrix := one_column when width <= current_support_breakpoint

BreakpointValue = mutable_implementation_parameter

Reflow MUST preserve content, status, capability, and action meaning
OverflowX = FALSE at supported viewport widths
HideInformationToFit = FORBIDDEN

CompactLayout := reduce spacing ∪ change geometry
CompactLayout ≠ delete decision information
