// Word counting helper.

// Returns the number of words in `text`. Any run of whitespace separates
// words; empty or blank text, null and undefined have 0 words.
export function wordCount(text) {
  if (text == null) return 0;
  const trimmed = text.trim();
  return trimmed === '' ? 0 : trimmed.split(/\s+/).length;
}

// Returns the number of characters in `text` that are not whitespace; empty
// or blank text has 0.
export function charCount(text) {
  return text.replace(/\s/g, '').length;
}
