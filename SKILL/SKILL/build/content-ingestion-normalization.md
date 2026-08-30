---
id: content-ingestion-normalization
trigger: "Markdown frontmatter, slug, draft, date, category, normalize post, sort posts"
confidence: 0.9
responsibility: build
knowledge_type: mechanism
temporality: stateful
source: "tools/site/load-posts.mjs; tools/site/normalize-post.mjs"
related: []
---

## Action

// SKILL := content_ingestion_normalization
// Signature: MarkdownDocumentSet × BuildConfig → NormalizedPublishedPostSet

CORE := DeterministicLoad → SchemaValidation → PublicationFilterSort

LoadOrder := lexical_filename_order
Required := { title, description, date, updated, slug, category, featured, draft }
SlugPattern := lowercase_alnum_with_single_hyphen_separators

ASSERT title ≠ empty ∧ description ≠ empty ∧ body ≠ empty
ASSERT date, updated are valid `YYYY-MM-DD`
ASSERT updated >= date
ASSERT category ∈ config.categories
ASSERT featured, draft ∈ Boolean
ASSERT slug is unique
ASSERT published date <= current Tokyo date

Output := posts where draft = FALSE
Sort(Output) := date descending, then slug ascending
Freeze(each Output)
