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
// Signature: LanguageState → PageCommerceProjection

CORE := ResolveLanguage → SelectLocaleRecord → AtomicDOMProjection

LanguageState := saved `{ja,en}` else browser_language else `ja`

Projection(ja)
  := html.lang `ja` ∪ JapaneseCopy ∪ BOOTH_URL ∪ JPY_Price
Projection(en)
  := html.lang `en` ∪ EnglishCopy ∪ Gumroad_URL ∪ USD_Price

ProjectTogether
  := title ∪ description ∪ text ∪ HTMLText ∪ store_href
   ∪ price ∪ aria_pressed

PartialCommerceProjection = FORBIDDEN
Persist(LanguageState) → localStorage.obwrite_lang
