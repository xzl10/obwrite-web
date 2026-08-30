const languages = {
  ja: {
    title: "Obwrite — 対応サイトと更新情報",
    description: "Obwriteの対応サイト、保存対象、実験的対応、および最新の更新情報。",
    text: {
      nav_blog: "ブログ", platform_title: "現在の対応範囲", stable_sites: "対応サイト", experimental_sites: "実験的対応（β）", requirements_title: "動作環境", browser: "ブラウザ", chrome_latest: "Google Chrome 最新版", destination: "連携アプリ", delivery: "提供物", requirements_desc: "macOS、Linux、スマートフォンは公式サポート対象外です。", platform_yahoo: "Yahoo!フリマ", platform_mercari: "メルカリ", platform_rakuma: "楽天ラクマ", cap_post: "ポスト", cap_image: "画像", cap_video: "動画",
      blog_title: "Obwrite Blog", blog_desc: "動作条件、保存結果、設定、更新履歴を公開します。", blog_all: "すべての記事", support: "サポート"
    }
  },
  en: {
    title: "Obwrite — Supported sites and updates",
    description: "Supported sites, saved content types, experimental support, and product updates for Obwrite.",
    text: {
      nav_blog: "Blog (JP)", platform_title: "Current support scope", stable_sites: "Supported sites", experimental_sites: "Experimental (Beta)", requirements_title: "Requirements", browser: "Browser", chrome_latest: "Google Chrome (Latest)", destination: "Connected app", delivery: "Deliverables", requirements_desc: "macOS, Linux, and smartphones are not officially supported.", platform_yahoo: "Yahoo! Flea Market", platform_mercari: "Mercari", platform_rakuma: "Rakuten Rakuma", cap_post: "Post", cap_image: "Image", cap_video: "Video",
      blog_title: "Obwrite Blog", blog_desc: "Requirements, saved outcomes, setup, and release history. Articles are currently in Japanese.", blog_all: "View all articles", support: "Support"
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
  document.querySelectorAll("[data-lang]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === lang)));
  localStorage.setItem("obwrite_lang", lang);
}

function initGumroadModal() {
  const triggers = document.querySelectorAll('.gumroad-button, [data-gumroad-overlay-checkout]');
  const modal = document.getElementById('gumroad-modal');
  if (!modal || !triggers.length) return;
  const iframe = modal.querySelector('iframe');
  const closeBtn = modal.querySelector('.gumroad-modal-close');

  function openModal(e) {
    if (e) e.preventDefault();
    if (iframe && iframe.getAttribute('src') === 'about:blank') {
      iframe.src = "https://obwrite.gumroad.com/l/app";
    }
    modal.classList.add('is-open');
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      if (!modal.classList.contains('is-open')) modal.setAttribute('hidden', '');
    }, 200);
    document.body.style.overflow = '';
  }

  triggers.forEach((btn) => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-lang]");
  if (buttons.length) {
    const saved = localStorage.getItem("obwrite_lang");
    const initial = saved === "ja" || saved === "en" ? saved : navigator.language.startsWith("ja") ? "ja" : "en";
    applyLanguage(initial);
    buttons.forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
  }
  initGumroadModal();
  if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("view-transitions");
});
