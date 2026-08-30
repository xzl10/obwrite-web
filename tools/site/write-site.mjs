import { access, cp, mkdir, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function move(source, target) {
  await mkdir(path.dirname(target), { recursive: true });
  try {
    await rename(source, target);
  } catch (error) {
    if (error.code !== "EXDEV") throw error;
    await cp(source, target, { recursive: true });
    await rm(source, { recursive: true, force: true });
  }
}

async function writeDocument(root, relativePath, content) {
  const target = path.join(root, relativePath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, content, "utf8");
}

export async function stageSite(config, documents) {
  await rm(config.stageRoot, { recursive: true, force: true });
  await mkdir(config.stageRoot, { recursive: true });
  for (const [relativePath, content] of documents) await writeDocument(config.stageRoot, relativePath, content);
  await cp(config.staticRoot, config.stageRoot, { recursive: true });
}

export async function publishSite(config) {
  const backupRoot = path.join(config.siteRoot, ".site-backup");
  const replaced = [];
  await rm(backupRoot, { recursive: true, force: true });
  await mkdir(backupRoot, { recursive: true });
  try {
    for (const relativePath of config.generatedPaths) {
      const staged = path.join(config.stageRoot, relativePath);
      const target = path.join(config.siteRoot, relativePath);
      const backup = path.join(backupRoot, relativePath);
      if (await exists(target)) await move(target, backup);
      replaced.push(relativePath);
      await move(staged, target);
    }
  } catch (error) {
    for (const relativePath of replaced.reverse()) {
      const target = path.join(config.siteRoot, relativePath);
      const backup = path.join(backupRoot, relativePath);
      await rm(target, { recursive: true, force: true });
      if (await exists(backup)) await move(backup, target);
    }
    throw error;
  } finally {
    await rm(config.stageRoot, { recursive: true, force: true });
    await rm(backupRoot, { recursive: true, force: true });
  }
}
