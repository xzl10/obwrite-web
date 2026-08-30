import matter from "gray-matter";

const required = ["title", "description", "date", "updated", "slug", "category", "featured", "draft"];
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function dateOnly(value, field, name) {
  const raw = value instanceof Date ? value.toISOString().slice(0, 10) : String(value ?? "");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw) || Number.isNaN(Date.parse(`${raw}T00:00:00Z`))) {
    throw new Error(`${name}: ${field} must be YYYY-MM-DD`);
  }
  return raw;
}

export function normalizePost(document, config) {
  const parsed = matter(document.source);
  for (const field of required) {
    if (!(field in parsed.data)) throw new Error(`${document.name}: missing ${field}`);
  }

  const post = {
    sourceName: document.name,
    title: String(parsed.data.title).trim(),
    description: String(parsed.data.description).trim(),
    date: dateOnly(parsed.data.date, "date", document.name),
    updated: dateOnly(parsed.data.updated, "updated", document.name),
    slug: String(parsed.data.slug).trim(),
    category: String(parsed.data.category).trim(),
    featured: parsed.data.featured,
    draft: parsed.data.draft,
    body: parsed.content.trim()
  };

  if (!post.title || !post.description || !post.body) throw new Error(`${document.name}: title, description, and body must not be empty`);
  if (!slugPattern.test(post.slug)) throw new Error(`${document.name}: invalid slug ${post.slug}`);
  if (!config.categories.includes(post.category)) throw new Error(`${document.name}: unknown category ${post.category}`);
  if (typeof post.featured !== "boolean" || typeof post.draft !== "boolean") throw new Error(`${document.name}: featured and draft must be booleans`);
  if (post.updated < post.date) throw new Error(`${document.name}: updated precedes date`);
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  if (!post.draft && post.date > today) throw new Error(`${document.name}: published post has a future date`);
  return Object.freeze(post);
}

export function normalizePosts(documents, config) {
  const posts = documents.map((document) => normalizePost(document, config));
  const slugs = new Set();
  for (const post of posts) {
    if (slugs.has(post.slug)) throw new Error(`duplicate slug: ${post.slug}`);
    slugs.add(post.slug);
  }
  return posts.filter((post) => !post.draft).sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}
