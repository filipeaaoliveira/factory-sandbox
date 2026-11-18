// snake_case helper.

// Lower-cases `text` and joins its words with a single '_'. Whitespace runs
// and repeated '_' collapse to one '_'; leading and trailing separators are
// dropped. null and undefined give ''.
export function to_snake_case(text) {
  if (text == null) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '_')
    .replace(/^_+|_+$/g, '');
}
