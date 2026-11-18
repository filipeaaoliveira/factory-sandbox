// camelCase helper.

// Joins the words of `text` (split on whitespace, '-' and '_') into camelCase:
// the first word is lower-cased, each later word is capitalised with the rest
// lower-cased. Repeated, leading and trailing separators are ignored. null and
// undefined give ''.
export function camelCase(text) {
  if (text == null) return '';
  return text
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word, i) => {
      const lower = word.toLowerCase();
      return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}
