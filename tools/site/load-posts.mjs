import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export async function loadPosts(postRoot) {
  const names = (await readdir(postRoot)).filter((name) => name.endsWith(".md")).sort();
  return Promise.all(names.map(async (name) => ({
    name,
    source: await readFile(path.join(postRoot, name), "utf8")
  })));
}
