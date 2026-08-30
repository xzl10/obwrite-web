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
// Signature: ContentContext × DecisionStage → ActionOwner

CORE := ContextClassification → SingleActionOwner → StageAppropriatePlacement

∀ context × action_purpose:
  ∃! owner: Owns(owner, action_purpose, context)

InformationalContext owns informational_continuation
DecisionContext owns decision_action
PersistentAccessContext owns persistent_action_access

InformationalContent ∩ DecisionAction = ∅

RepeatedAction is valid only_if DecisionStage differs
SameContext ∧ SamePurpose ∧ DuplicateAction ⇒ REMOVE

Component replacement MUST preserve ownership, not component identity
