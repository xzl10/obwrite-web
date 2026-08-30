const languages = {
  ja: {
    title: "Obwrite — Webの投稿とメディアをObsidianへローカル保存",
    description: "X.comの本文・オリジナル画像・動画、フリマの商品画像をローカルObsidian Vaultへ保存するWindowsデスクトップアプリ。v0.8.0 Early Access。",
    store: "https://booth.pm/ja/items/8774082",
    price: "¥2,800",
    text: {
      nav_outcome: "保存内容", nav_requirements: "動作環境", nav_blog: "ブログ", nav_pricing: "価格", nav_buy: "BOOTHで購入", badge: "OBWRITE 0.8.0 · EARLY ACCESS",
      hero_title: "閲覧中のWebを、<br><span>自分のVaultへ。</span>", hero_lead: "X.comの本文・オリジナル画像・動画、フリマの商品画像を、ローカルのObsidian Vaultへ保存するWindowsデスクトップアプリです。", hero_buy: "BOOTHで購入 — ¥2,800", hero_check: "購入前に動作環境を確認",
      fact_os: "Windows 10 / 11（64-bit）", fact_local: "ローカル処理", fact_manual: "スタートアップマニュアル付属", demo_label: "OUTCOME DEMO", demo_title: "仕組みではなく、保存結果を確認する", demo_desc: "入力、操作、Vaultに生成される結果を確認できる実演動画を準備しています。内部の抽出方式は公開しません。", demo_article: "保存される内容を記事で確認", demo_pending: "実演動画 準備中", demo_honesty: "未提供の動画を再生可能であるかのようには表示していません。",
      before_title: "リンクだけでなく、文脈とファイルを残す", before_heading: "ブックマークとダウンロード", before_1: "ページ削除後はリンク先を参照できない", before_2: "画像と元の投稿が離れる", before_3: "保存先を手作業で整理する", after_heading: "Obsidian Vault", after_1: "Markdownに元URLと内容を記録", after_2: "取得した画像・動画をローカル保存", after_3: "ノートとメディアを同じVaultで管理",
      platform_title: "現在の対応範囲", stable_sites: "対応サイト", experimental_sites: "実験サイト", platform_yahoo: "Yahoo!フリマ", platform_mercari: "メルカリ", platform_rakuma: "楽天ラクマ", cap_post: "ポスト", cap_image: "画像", cap_video: "動画", cap_structure: "構造依存", cap_format: "形式制限",
      requirements_title: "購入前に必要な環境", requirements_desc: "対応条件に合わない場合は購入しないでください。macOS、Linux、スマートフォンは公式サポート対象外です。", browser: "ブラウザ", chrome_latest: "Google Chrome 最新版", destination: "保存先", delivery: "提供物", privacy_title: "保存処理はPC内で完結", privacy_desc: "テレメトリや利用統計は収集しません。通信は、ユーザーが閲覧する対象ページへのアクセスと、明示的に指示した画像・動画の取得に限定されます。", privacy_note: "Obwriteは各サービスの公式製品ではありません。閲覧可能な単一ページを私的使用の範囲で保存するブラウジング支援ツールです。",
      blog_title: "Obwrite Blog", blog_desc: "動作条件、保存結果、設定、更新履歴を公開します。", blog_all: "すべての記事", pricing_desc: "買い切りのダウンロード商品です。Early Accessのため、UIや補助機能は今後変更される場合があります。", one_time: "買い切り", pricing_buy: "BOOTHの商品説明を確認", footer_tagline: "Webの情報をローカルObsidian Vaultへ。", support: "サポート"
    }
  },
  en: {
    title: "Obwrite — Save web posts and media to a local Obsidian Vault",
    description: "A Windows desktop app for saving supported web posts and media into a local Obsidian Vault. Obwrite v0.8.0 Early Access.",
    store: "https://obwrite.gumroad.com/l/app",
    price: "$29",
    text: {
      nav_outcome: "What it saves", nav_requirements: "Requirements", nav_blog: "Blog (JP)", nav_pricing: "Pricing", nav_buy: "Buy on Gumroad", badge: "OBWRITE 0.8.0 · EARLY ACCESS",
      hero_title: "Keep the web you are viewing<br><span>inside your own Vault.</span>", hero_lead: "A Windows desktop app that saves supported X.com content and marketplace product images into your local Obsidian Vault.", hero_buy: "Buy on Gumroad — $29", hero_check: "Check requirements before purchase",
      fact_os: "Windows 10 / 11 (64-bit)", fact_local: "Local processing", fact_manual: "Startup manual included", demo_label: "OUTCOME DEMO", demo_title: "Inspect the saved result, not the mechanism", demo_desc: "A demonstration showing the input, action, and resulting Vault files is being prepared. Internal extraction mechanisms are not disclosed.", demo_article: "Read what Obwrite saves (JP)", demo_pending: "Demonstration in preparation", demo_honesty: "No unavailable video is presented as playable.",
      before_title: "Keep context and files, not only a link", before_heading: "Bookmarks and downloads", before_1: "A deleted page leaves an unusable link", before_2: "Downloaded media loses its source context", before_3: "Files require manual organization", after_heading: "Obsidian Vault", after_1: "Markdown records the source URL and content", after_2: "Retrieved images and videos stay local", after_3: "Notes and media live in the same Vault",
      platform_title: "Current support scope", stable_sites: "Supported sites", experimental_sites: "Experimental sites", platform_yahoo: "Yahoo! Flea Market", platform_mercari: "Mercari", platform_rakuma: "Rakuten Rakuma", cap_post: "Post", cap_image: "Image", cap_video: "Video", cap_structure: "Page-dependent", cap_format: "Format-limited",
      requirements_title: "Required before purchase", requirements_desc: "Do not purchase if your environment does not meet these conditions. macOS, Linux, and mobile devices are not officially supported.", browser: "Browser", chrome_latest: "Latest Google Chrome", destination: "Destination", delivery: "Included", privacy_title: "Saving is processed on your PC", privacy_desc: "Obwrite collects no telemetry or usage statistics. Network access is limited to pages you choose to view and media you explicitly request to retrieve.", privacy_note: "Obwrite is not affiliated with the supported services. It assists manual saving of a single page you can access for appropriate personal use.",
      blog_title: "Obwrite Blog", blog_desc: "Requirements, saved outcomes, setup, and release history. Articles are currently in Japanese.", blog_all: "View all articles", pricing_desc: "A one-time download product. As Early Access software, its UI and supporting features may change.", one_time: "One-time purchase", pricing_buy: "Review the Gumroad listing", footer_tagline: "Web information, kept in your local Obsidian Vault.", support: "Support"
    }
  }
};

function applyLanguage(lang) {
  const selected = languages[lang] ?? languages.ja;
  document.documentElement.lang = lang;
  document.title = selected.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", selected.description);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = selected.text[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = selected.text[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-store-link]").forEach((element) => element.setAttribute("href", selected.store));
  document.querySelectorAll("[data-price]").forEach((element) => { element.textContent = selected.price; });
  document.querySelectorAll("[data-lang]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === lang)));
  localStorage.setItem("obwrite_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("obwrite_lang");
  const initial = saved === "ja" || saved === "en" ? saved : navigator.language.startsWith("ja") ? "ja" : "en";
  applyLanguage(initial);
  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
  if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("view-transitions");
});
