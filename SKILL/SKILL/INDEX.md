# Obwrite Web Skill Index

Read this file first. Route by Web engineering responsibility, then load only the matching skill and its direct dependencies.

## Responsibility Contract

| Responsibility | Owns | Does not own |
|---|---|---|
| `architecture` | Page topology, addressability, source/generated ownership | Copy, CSS detail, deployment procedure |
| `content` | Product claims, disclosure, capability language, action meaning | DOM geometry, build I/O |
| `frontend` | HTML semantics, accessibility, locale projection, responsive UI | Search metadata, publishing transaction |
| `seo` | Canonical/share metadata, structured data, discovery artifacts | Visual layout, product truth |
| `build` | Ingestion, normalization, rendering, staged publication | Editorial approval, hosting state |
| `quality` | Generated integrity, claim gates, repeatability verification | Authoring or deployment side effects |
| `operations` | End-to-end workflow, external resync, deployment readiness | Lower-level relation definitions |

## Knowledge Discipline

```text
Folder := Web responsibility
knowledge_type := invariant | policy | mechanism | observation
temporality := timeless | stateful | dated

MutableValue promoted_to TimelessInvariant = CATEGORY_ERROR
Policy labelled_as Theorem = CATEGORY_ERROR
Observation without invalidates_on = STALE_BY_CONSTRUCTION
```

## Task Routing

| Task / Trigger | Primary skill | Direct dependencies |
|---|---|---|
| source vs generated, where to edit | `architecture/authoring-generated-zone-ownership.md` | — |
| article route, direct URL, static 404 | `architecture/static-page-addressability.md` | authoring-generated-zone-ownership |
| JavaScript disabled, baseline navigation | `architecture/progressive-enhancement-baseline.md` | static-page-addressability |
| version, price, requirements, support truth | `content/product-claim-ssot.md` | — |
| public outcome vs private mechanism | `content/selective-outcome-disclosure.md` | — |
| CTA duplication and placement | `content/decision-stage-action-ownership.md` | progressive-enhancement-baseline |
| Stable/Experimental and capability tags | `content/support-capability-status-model.md` | product-claim-ssot |
| semantic HTML, alt, heading, keyboard | `frontend/semantic-accessibility-baseline.md` | progressive-enhancement-baseline |
| JA/EN, BOOTH/Gumroad, localized price | `frontend/locale-commerce-state-projection.md` | product-claim-ssot, progressive-enhancement-baseline |
| mobile, breakpoint, overflow, density | `frontend/responsive-information-density.md` | semantic-accessibility-baseline |
| title, description, canonical, OG, Twitter | `seo/page-metadata-contract.md` | static-page-addressability |
| BlogPosting JSON-LD | `seo/blogposting-structured-data.md` | page-metadata-contract |
| RSS, sitemap, robots, draft discovery | `seo/feed-sitemap-discovery.md` | static-page-addressability, page-metadata-contract |
| frontmatter, slug, date, draft, sort | `build/content-ingestion-normalization.md` | — |
| render HTML/XML/JSON-LD/CSS/JS | `build/deterministic-site-render.md` | content-ingestion-normalization + relevant architecture/seo skills |
| stage, backup, replace, rollback | `build/staged-publication-rollback.md` | authoring-generated-zone-ownership, deterministic-site-render |
| broken internal link or missing asset | `quality/generated-link-asset-integrity.md` | static-page-addressability, staged-publication-rollback |
| forbidden claim, support count, CTA count | `quality/public-claim-regression-gates.md` | product/disclosure/action/support content skills |
| second build and hash comparison | `quality/output-determinism-verification.md` | deterministic-site-render, staged-publication-rollback |
| local author/build/preview loop | `operations/author-build-preview-workflow.md` | ownership, publish, integrity, preview server skills |
| local HTTP server, PORT, traversal, private paths | `operations/local-preview-server-boundary.md` | authoring-generated-zone-ownership, generated-link-asset-integrity |
| BOOTH/release/price/support resync | `operations/external-ssot-resynchronization.md` | product-claim-ssot, public-claim-regression-gates |
| deploy, GitHub Pages, CNAME, HTTPS | `operations/deployment-readiness-gate.md` | preview, resync, integrity, claim gates |

## Inventory

### architecture

- `authoring-generated-zone-ownership`
- `static-page-addressability`
- `progressive-enhancement-baseline`

### content

- `product-claim-ssot`
- `selective-outcome-disclosure`
- `decision-stage-action-ownership`
- `support-capability-status-model`

### frontend

- `semantic-accessibility-baseline`
- `locale-commerce-state-projection`
- `responsive-information-density`

### seo

- `page-metadata-contract`
- `blogposting-structured-data`
- `feed-sitemap-discovery`

### build

- `content-ingestion-normalization`
- `deterministic-site-render`
- `staged-publication-rollback`

### quality

- `generated-link-asset-integrity`
- `public-claim-regression-gates`
- `output-determinism-verification`

### operations

- `author-build-preview-workflow`
- `local-preview-server-boundary`
- `external-ssot-resynchronization`
- `deployment-readiness-gate`

## Dependency Direction

```text
operations ──> quality ──> build ──> architecture
     │             │          └────> seo
     │             ├───────────────> content
     │             └───────────────> architecture
     ├────────> content
     ├────────> frontend
     └────────> seo

frontend ──> content | architecture
seo ──────> content | architecture
```

`related` points to dependencies only. Dependencies never point back to clients.

## Demand Paging

```text
1. Match task language against Task Routing.
2. Load the primary skill.
3. Load direct `related` dependencies only when required.
4. Maximum loaded skills per task = 5.
5. Related traversal depth <= 1.
6. For `knowledge_type=observation`, verify `invalidates_on` before use.
7. Do not bulk-load this corpus.
```
