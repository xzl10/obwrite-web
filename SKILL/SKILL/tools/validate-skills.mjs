import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const responsibilities = ["architecture", "content", "frontend", "seo", "build", "quality", "operations"];
const knowledgeTypes = new Set(["invariant", "policy", "mechanism", "observation"]);
const temporalities = new Set(["timeless", "stateful", "dated"]);
const allowedTemporality = {
  invariant: new Set(["timeless"]),
  policy: new Set(["timeless", "stateful"]),
  mechanism: new Set(["stateful"]),
  observation: new Set(["dated"])
};
const required = ["id", "trigger", "confidence", "responsibility", "knowledge_type", "temporality", "source", "related"];
const skills = new Map();

for (const responsibility of responsibilities) {
  const directory = path.join(root, responsibility);
  const names = (await readdir(directory)).filter((name) => name.endsWith(".md")).sort();
  for (const name of names) {
    const file = path.join(directory, name);
    const source = await readFile(file, "utf8");
    const { data } = matter(source);
    for (const field of required) if (!(field in data)) throw new Error(`${name}: missing ${field}`);
    if (data.id !== path.basename(name, ".md")) throw new Error(`${name}: id must match filename`);
    if (data.responsibility !== responsibility) throw new Error(`${name}: responsibility must match directory`);
    if (skills.has(data.id)) throw new Error(`${name}: duplicate id ${data.id}`);
    if (typeof data.trigger !== "string" || !data.trigger.trim()) throw new Error(`${name}: trigger must be non-empty`);
    if (typeof data.confidence !== "number" || data.confidence < 0 || data.confidence > 1) throw new Error(`${name}: invalid confidence`);
    if (!knowledgeTypes.has(data.knowledge_type)) throw new Error(`${name}: invalid knowledge_type`);
    if (!temporalities.has(data.temporality) || !allowedTemporality[data.knowledge_type].has(data.temporality)) throw new Error(`${name}: invalid temporality for ${data.knowledge_type}`);
    if (!Array.isArray(data.related) || data.related.length > 4) throw new Error(`${name}: related must be an array of at most 4 direct dependencies`);
    const observationFields = ["observed_at", "evidence", "invalidates_on"];
    if (data.knowledge_type === "observation") {
      for (const field of observationFields) if (!(field in data) || !String(data[field]).trim()) throw new Error(`${name}: observation missing ${field}`);
    } else {
      for (const field of observationFields) if (field in data) throw new Error(`${name}: ${field} is reserved for observations`);
    }
    if ((source.match(/^## Action$/gm) ?? []).length !== 1) throw new Error(`${name}: expected exactly one Action section`);
    if ((source.match(/^CORE :=/gm) ?? []).length !== 1) throw new Error(`${name}: expected exactly one CORE relation`);
    if (source.trimEnd().split(/\r?\n/).length > 40) throw new Error(`${name}: exceeds 40-line budget`);
    skills.set(data.id, { name, data });
  }
}

for (const [id, skill] of skills) {
  for (const dependency of skill.data.related) if (!skills.has(dependency)) throw new Error(`${id}: unknown related id ${dependency}`);
}

const visiting = new Set();
const visited = new Set();
function visit(id, trail = []) {
  if (visiting.has(id)) throw new Error(`dependency cycle: ${[...trail, id].join(" -> ")}`);
  if (visited.has(id)) return;
  visiting.add(id);
  for (const dependency of skills.get(id).data.related) visit(dependency, [...trail, id]);
  visiting.delete(id);
  visited.add(id);
}
for (const id of skills.keys()) visit(id);

const index = await readFile(path.join(root, "INDEX.md"), "utf8");
const inventory = index.split("## Inventory")[1]?.split("## Dependency Direction")[0] ?? "";
const indexedIds = [...inventory.matchAll(/^- `([^`]+)`$/gm)].map((match) => match[1]);
if (new Set(indexedIds).size !== indexedIds.length) throw new Error("INDEX inventory contains duplicate ids");
for (const id of skills.keys()) if (!indexedIds.includes(id)) throw new Error(`INDEX missing skill ${id}`);
for (const id of indexedIds) if (!skills.has(id)) throw new Error(`INDEX references unknown skill ${id}`);
if (skills.size !== 22) throw new Error(`expected 22 skills, found ${skills.size}`);

console.log(`Validated ${skills.size} Obwrite Web skills across ${responsibilities.length} responsibilities.`);
