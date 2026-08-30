---
id: locale-commerce-state-projection
trigger: "i18n, language switch, JP EN, BOOTH Gumroad, price locale, localStorage"
confidence: 0.8
responsibility: frontend
knowledge_type: mechanism
temporality: stateful
source: "_site-src/assets/script.js; _site-src/lp/index.html"
related:
  - product-claim-ssot
  - progressive-enhancement-baseline
---

## Action

// SKILL := locale_commerce_state_projection
// Signature: LocalePreference × LocaleCatalog → AtomicPageProjection

CORE := ResolveLocale → SelectCompleteRecord → AtomicProjection

ResolveLocale
  := valid_persisted_preference
   ?? supported_environment_preference
   ?? declared_default

Projection
  := document_language ∪ metadata ∪ visible_copy ∪ accessibility_state

ProjectionFields MUST derive_from one LocaleRecord
PartialLocaleProjection = FORBIDDEN

CommerceAuthority ≠ LocaleProjectionAuthority
EssentialCommerceAccess MUST survive locale enhancement failure
Persist only validated supported preferences
