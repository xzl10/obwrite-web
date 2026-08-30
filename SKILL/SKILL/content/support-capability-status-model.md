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
// Signature: SupportSubjectSet × SupportDeclaration → SupportProjection

CORE := DisjointStatusPartition → CapabilityProjection → UncertaintyDisclosure

StatusClasses MUST be mutually exclusive for each SupportSubject

∀ subject ∈ SupportSubjectSet:
  Render(Identity(subject), Status(subject), Capabilities(subject))

CapabilityProjection MUST derive_from SupportDeclaration
UnsupportedOrConditionalCapability MUST NOT appear unconditional

CompactProjection MAY reduce detail
CompactProjection MUST preserve status meaning
DetailedLimitations MUST remain discoverable

PresentationGeometry ≠ SupportSemantics
ThirdPartyIdentity ≠ ThirdPartyNavigationRequirement
