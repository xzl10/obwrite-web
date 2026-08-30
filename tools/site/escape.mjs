export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

export function escapeXml(value) {
  return escapeHtml(value);
}

export function jsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
