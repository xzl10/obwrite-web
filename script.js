// ==========================================================================
// Obwrite Official LP — SPA i18n Engine (Japanese / English)
// ==========================================================================

const i18nData = {
    ja: {
        page_title: "Obwrite — Capture Web Directly into Obsidian | 3つの喪失を防ぐローカルWeb保存パイプライン",
        meta_desc: "X.com、メルカリ、Yahoo!フリマ、Reddit、Civitaiの投稿・画像・動画をワンクリックでObsidianへ完全保存。消滅・散逸・リンク切れを防ぐローカル完結型デスクトップアプリ。",
        
        // Nav
        nav_features: "機能",
        nav_solutions: "3つの喪失",
        nav_platforms: "対応サイト",
        nav_pricing: "価格",
        nav_buy_gumroad: "ライセンスを購入 ($29)",

        // Hero
        badge_text: "Obwrite 3.1.0 — Web to Obsidian Pipeline",
        hero_title: 'Webのすべてを、<br><span class="text-gradient">Obsidian へ直接・恒久保存。</span>',
        hero_subtitle: "X.com のポスト、メルカリ・Yahoo!フリマの出品、Reddit や Civitai の投稿をワンクリックで抽出。<br>画像・動画もローカル Vault に一括保存し、データの消滅と散逸を永遠に防ぎます。",
        hero_cta_buy: "ライセンスを購入 ($29)",
        hero_meta_1: "✓ Windows 10 / 11 (64bit) ネイティブ",
        hero_meta_2: "✓ 完全ローカル動作（外部送信ゼロ）",
        hero_meta_3: "✓ 買い切り・永久アップデート対応",

        // Showcase
        showcase_title: "Obwrite — Active Focus Pipeline",
        tag_web_ingress: "Web Ingress (ブラウザ直接接続)",
        tag_caption: "スタンドアロン高速 CDP パイプライン",
        tag_arrow_badge: "1-Click Local Extraction",
        tag_vault: "Obsidian Vault",
        tree_text: "(本文 + 埋込)",
        tree_media: "(画像/動画 自動DL)",

        // Solutions (3つの喪失)
        solutions_title: 'Obwrite が防ぐ <span class="text-gradient">3 つの喪失</span>',
        solutions_subtitle: "ブラウザのブックマークやダウンロードフォルダの限界を超え、知識をローカルで完全防衛します。",
        sol_1_title: "【1】投稿とメディアの消滅",
        sol_1_desc: "X.com のポスト、メルカリや Yahoo!フリマの商品ページは、削除・凍結・出品終了で跡形もなく消えます。Obwrite は投稿コメント・画像・動画・元URLをローカル Vault に一括保存。サイトが閉鎖してもオフラインで閲覧できます。",
        sol_2_title: "【2】ファイルとリンクの散逸",
        sol_2_desc: "ダウンロードフォルダに山積みになった画像や動画。「誰の投稿だったか」探すのは困難です。Obwrite は Markdown ノートとメディアを自動紐付け。ドメインごとに直線的なフォルダを作成し、迷わず整理されます。",
        sol_3_title: "【3】リンク切れによる文脈の喪失",
        sol_3_desc: "URL をメモしただけでは、数ヶ月後にアクセスしても「404 Not Found」。Obwrite はテキストと高解像度メディアをその場でローカル化。Obsidian 上の半永久的な個人データベースとして構築されます。",

        // Platforms
        platforms_title: '主要プラットフォームを <span class="text-gradient">自動検知 ＆ 最適抽出</span>',
        platforms_subtitle: "複雑な認証やレイアウト変化に耐えうる、堅牢な専用抽出エンジンを搭載。",
        p_x_desc: "本文、画像、動画、返信ツリーをクリーンな Markdown とローカルファイルへ抽出。",
        p_mercari_desc: "商品タイトル、価格、説明文、出品者、全商品画像を即座にノート化。",
        p_yahoo_desc: "出品終了で見れなくなる前に、画像・スペック情報を手元の Vault へアーカイブ。",
        p_reddit_desc: "スレッドタイトル、本文、メディア、コミュニティ情報を構造化保存。",
        p_civitai_desc: "プロンプト、モデルメタデータ、生成パラメータ、高解像度プレビューを抽出。",
        p_general_desc: "タイトル、本文、OGP 画像、URL をスマートに Markdown へ整形保存。",

        // Engineering Features
        tech_title: 'エンジニアリングがもたらす <span class="text-gradient">圧倒的な高速性と安定性</span>',
        tech_subtitle: "Go 1.26 と Fyne GUI によるネイティブ設計。メモリ消費は極小、動作は瞬時。",
        tech_1_title: "末端ファイル名を壊さない直線ルーティング",
        tech_1_desc: "ユーザーが指定したファイル名を勝手に改変しません。Obwrite/x.com/output.md のように、ドメインフォルダを親ディレクトリとファイル名の間に直線挿入。意図通りの整頓を実現します。",
        tech_2_title: "ワンタップで切り替える操作パネル",
        tech_2_desc: "[ Write ] [ Prepend/Append ] [ DL ] [ HTML/MD ] が一直線に並ぶ快適な UI。ボタン切り替え時もレイアウトのブレ（Jitter）が物理的に発生しない精密設計。",
        tech_3_title: "外部クラウド非依存・完全ローカル",
        tech_3_desc: "あなたの Vault や保存データは外部サーバーを一切経由しません。アカウント登録も不要。完全にあなたの PC の中だけで完結する安心のセキュリティ。",
        tech_4_title: "Go 1.26 × Fyne ネイティブバイナリ",
        tech_4_desc: "重たい Electron は不採用。Go 言語でコンパイルされた単一の超高速バイナリ（Obwrite.exe）として動作し、起動もメモリ消費も驚くほど軽快です。",

        // Pricing
        pricing_title: 'シンプルな <span class="text-gradient">ライセンス体系</span>',
        pricing_subtitle: "買い切りライセンスで、ずっと手元で使い続けられます。",
        price_period: "/ 買い切り (Lifetime)",
        price_desc: "すべてのプラットフォーム抽出、無制限のローカル保存、今後の機能アップデートを含む完全版。",
        f_1: "✓ すべてのプラットフォーム抽出（X, メルカリ, Yahoo, Reddit, Civitai等）",
        f_2: "✓ 画像・動画メディアの自動ローカルダウンロード",
        f_3: "✓ 直線的ドメインルーティング ＆ ディレクトリ自動整理",
        f_4: "✓ HTML / Markdown フォーマット自在切替",
        f_5: "✓ 商用利用・個人利用可能",
        f_6: "✓ 永久アップデート ＆ オフライン完全対応",
        pricing_btn: "Gumroad でライセンスを購入 ($29)",

        // Footer
        footer_brand_sub: "The Ultimate Local Web-to-Obsidian Pipeline.",
        footer_copy: "© 2026 Obwrite. All rights reserved. Designed for Obsidian Power Users."
    },
    en: {
        page_title: "Obwrite — Capture Web Directly into Obsidian | Prevent the 3 Inevitable Losses",
        meta_desc: "1-Click extract posts, images, and videos from X.com, Mercari, Yahoo! Fleamarket, Reddit, and Civitai directly into Obsidian. 100% Local & Offline Desktop App.",

        // Nav
        nav_features: "Features",
        nav_solutions: "3 Losses Solved",
        nav_platforms: "Platforms",
        nav_pricing: "Pricing",
        nav_buy_gumroad: "Buy License ($29)",

        // Hero
        badge_text: "Obwrite 3.1.0 — Web to Obsidian Pipeline",
        hero_title: 'Capture the Web directly into<br><span class="text-gradient">Obsidian. Without Limits.</span>',
        hero_subtitle: "Extract posts, high-res images, and videos from X.com, Mercari, Yahoo! Fleamarket, Reddit, and Civitai with 1 click.<br>Saved straight to your local Vault. Prevent digital decay and scattered files forever.",
        hero_cta_buy: "Buy Lifetime License ($29)",
        hero_meta_1: "✓ Windows 10 / 11 (64-bit) Native",
        hero_meta_2: "✓ 100% Local (Zero External Cloud)",
        hero_meta_3: "✓ One-Time Purchase. Lifetime Updates",

        // Showcase
        showcase_title: "Obwrite — Active Focus Pipeline",
        tag_web_ingress: "Web Ingress (Direct Browser Attach)",
        tag_caption: "Standalone high-speed CDP pipeline",
        tag_arrow_badge: "1-Click Local Extraction",
        tag_vault: "Obsidian Vault",
        tree_text: "(Body + Embedded)",
        tree_media: "(Auto Media DL)",

        // Solutions (3 Inevitable Losses)
        solutions_title: '3 Critical Losses <span class="text-gradient">Obwrite Solves</span>',
        solutions_subtitle: "Beyond fragile browser bookmarks. Permanent, sovereign personal knowledge defense.",
        sol_1_title: "【1】Vanishing Posts & Media",
        sol_1_desc: "X.com posts and online listings disappear without a trace when deleted, banned, or expired. Obwrite captures text, images, videos, and source URLs into your local Vault permanently. View anytime, even offline.",
        sol_2_title: "【2】Scattered Files & Broken Context",
        sol_2_desc: "Hundreds of unnamed media files piled up in your Downloads folder. Obwrite automatically links media to your Markdown notes and organizes them into linear domain directories with zero clutter.",
        sol_3_title: "【3】Context Drift via Dead URLs (404s)",
        sol_3_desc: "Saving just a URL means dead links in a few months. Obwrite localizes high-res images and clean Markdown simultaneously, building a resilient personal database in Obsidian that never rots.",

        // Platforms
        platforms_title: 'Auto-Detected & <span class="text-gradient">Optimized Extraction</span>',
        platforms_subtitle: "Battle-tested extraction engines designed to withstand complex layouts and bot challenges.",
        p_x_desc: "Extracts tweets, high-res media, video streams, and thread trees into clean Markdown.",
        p_mercari_desc: "Captures title, price, description, seller, and full photo gallery instantly.",
        p_yahoo_desc: "Archives product specs and gallery before items sell out and vanish forever.",
        p_reddit_desc: "Extracts thread titles, self-text, media bundles, and subreddit metadata.",
        p_civitai_desc: "Extracts generation prompts, model metadata, sampler settings, and image galleries.",
        p_general_desc: "Smart title, content, OGP preview, and source URL formatted cleanly into Markdown.",

        // Engineering Features
        tech_title: 'Engineering for <span class="text-gradient">Blazing Speed & Stability</span>',
        tech_subtitle: "Compiled Go 1.26 + Fyne native architecture. Near-zero memory footprint. Instant startup.",
        tech_1_title: "Leaf Node Immutability & Linear Routing",
        tech_1_desc: "Never destroys your chosen filename. Injects clean domain subdirectories linearly (e.g., Obwrite/x.com/output.md) without overwriting your leaf notes.",
        tech_2_title: "Zero-Jitter Control Strip",
        tech_2_desc: "[ Write ] [ Prepend/Append ] [ DL ] [ HTML/MD ] aligned in a single ergonomic strip. Zero layout shifting during rapid state toggles.",
        tech_3_title: "100% Offline & Sovereign Privacy",
        tech_3_desc: "Your Vault and data never touch any external server. No account required. 100% client-side execution inside your local machine.",
        tech_4_title: "Native Go 1.26 × Fyne Binary",
        tech_4_desc: "No bulky Electron. Single compiled native executable (Obwrite.exe) that launches instantly with featherlight RAM usage.",

        // Pricing
        pricing_title: 'Simple, Transparent <span class="text-gradient">Pricing</span>',
        pricing_subtitle: "One-time purchase. Yours to keep forever with full offline freedom.",
        price_period: "/ One-time (Lifetime)",
        price_desc: "Includes all platform extractors, unlimited local vault saves, and future feature updates.",
        f_1: "✓ All platform extractors (X, Mercari, Yahoo!, Reddit, Civitai, etc.)",
        f_2: "✓ Automated local image & video downloading",
        f_3: "✓ Linear domain directory routing & vault auto-organization",
        f_4: "✓ Instant HTML / Markdown format toggle",
        f_5: "✓ Commercial and personal use license",
        f_6: "✓ Lifetime updates & 100% offline functionality",
        pricing_btn: "Buy Lifetime License on Gumroad ($29)",

        // Footer
        footer_brand_sub: "The Ultimate Local Web-to-Obsidian Pipeline.",
        footer_copy: "© 2026 Obwrite. All rights reserved. Designed for Obsidian Power Users."
    }
};

// State Management
let currentLang = 'ja';

function setLanguage(lang) {
    if (!i18nData[lang]) return;
    currentLang = lang;
    localStorage.setItem('obwrite_lang', lang);
    document.documentElement.lang = lang;

    // Update document title & meta
    document.title = i18nData[lang].page_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', i18nData[lang].meta_desc);

    // Update all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[lang][key]) {
            el.textContent = i18nData[lang][key];
        }
    });

    // Update all HTML nodes with data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (i18nData[lang][key]) {
            el.innerHTML = i18nData[lang][key];
        }
    });

    // Update toggle switch active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Auto-detect browser language or restore from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('obwrite_lang');
    if (saved && (saved === 'ja' || saved === 'en')) {
        setLanguage(saved);
    } else {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang && userLang.startsWith('ja')) {
            setLanguage('ja');
        } else {
            setLanguage('en');
        }
    }

    // Bind click events on language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetLang = btn.getAttribute('data-lang');
            setLanguage(targetLang);
        });
    });
});
