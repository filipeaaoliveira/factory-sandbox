// kebab-case helper.

// Lower-cases `text` and joins its words with a single '-'. Whitespace runs
// and repeated '_' collapse to one '-'; leading and trailing separators are
// dropped. null and undefined give ''.
export function kebabCase(text) {
  if (text == null) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
