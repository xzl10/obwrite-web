---
id: decision-stage-action-ownership
trigger: "CTA ownership, duplicate CTA, article purchase action, related articles, decision stage"
confidence: 0.8
responsibility: content
knowledge_type: policy
temporality: timeless
source: "_site-src/lp/index.html; _site-src/blog/templates/layout.mjs; _site-src/blog/templates/pages.mjs"
related:
  - progressive-enhancement-baseline
---

## Action

// SKILL := decision_stage_action_ownership
// Signature: PageContext × DecisionStage → ActionOwner

CORE := ContextClassification → SinglePurpose → ActionPlacement

LP.Header owns persistent_purchase_access
LP.Hero owns initial_purchase_decision
LP.Pricing owns price_confirmed_purchase

Article.Header owns purchase_access
Article.Body owns information
Article.Related owns informational_continuation

Article.Body ∩ PurchaseAction = ∅
Article.Related ∩ PurchaseAction = ∅

RepeatedAction is valid only when DecisionStage differs
SameContextDuplicateAction ⇒ REMOVE
