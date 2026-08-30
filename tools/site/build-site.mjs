import { config } from "./config.mjs";
import { loadPosts } from "./load-posts.mjs";
import { normalizePosts } from "./normalize-post.mjs";
import { renderSite } from "./render-site.mjs";
import { validateRenderedDocuments } from "./validate-site.mjs";
import { publishSite, stageSite } from "./write-site.mjs";

const posts = normalizePosts(await loadPosts(config.postRoot), config);
const documents = await renderSite(config, posts);
validateRenderedDocuments(documents);
await stageSite(config, documents);
await publishSite(config);
console.log(`Built ${posts.length} published posts.`);
