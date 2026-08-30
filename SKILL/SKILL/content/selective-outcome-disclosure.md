---
id: selective-outcome-disclosure
trigger: "public disclosure, outcome proof, hide mechanism, extractor internals, selective disclosure"
confidence: 0.8
responsibility: content
knowledge_type: policy
temporality: timeless
source: "tools/site/validate-site.mjs; Obwrite web signaling specification"
related: []
---

## Action

// SKILL := selective_outcome_disclosure
// Signature: InformationItem → DisclosureClass

CORE := InformationClassification → PublicBoundary → ClaimDiscipline

PublicOutcome
  := saved_result ∪ supported_data ∪ requirements ∪ known_limitations
   ∪ local_processing ∪ release_history

PrivateMechanism
  := selector ∪ decoder ∪ extraction_fallback ∪ fixture
   ∪ site_specific_weakness ∪ reverse_engineering_countermeasure

Disclosure(PublicOutcome) = ALLOW
Disclosure(PrivateMechanism) = WITHHOLD

Label(`zero-knowledge proof`) = FORBIDDEN
Label(`100% proof`) = FORBIDDEN

OutcomeEvidence MUST NOT imply undisclosed mechanism details
