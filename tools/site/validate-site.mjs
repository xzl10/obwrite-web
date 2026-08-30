const forbiddenClaims = [
  "返信ツリー",
  "商品タイトル、価格、説明文、出品者",
  "subreddit metadata",
  "generation prompts",
  "モデルメタデータ",
  "生成パラメータ",
  "ゼロ知識証明",
  "100%証明",
  "武器商人",
  "Stealth Nash"
];

export function validateRenderedDocuments(documents) {
  const entries = new Map(documents);
  const required = ["index.html", "style.css", "platforms.css", "script.js", "blog/index.html", "feed.xml", "sitemap.xml", "robots.txt", "404.html"];
  for (const path of required) {
    if (!entries.has(path)) throw new Error(`missing generated document: ${path}`);
  }
  for (const [path, content] of entries) {
    if (!content.trim()) throw new Error(`empty generated document: ${path}`);
    for (const claim of forbiddenClaims) {
      if (content.includes(claim)) throw new Error(`${path}: forbidden public claim: ${claim}`);
    }
  }
}
