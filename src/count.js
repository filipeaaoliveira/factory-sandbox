// Word counting helper.

// Returns the number of words in `text`. Any run of whitespace separates
// words; empty or blank text has 0 words.
export function wordCount(text) {
  const trimmed = text.trim();
  return trimmed === '' ? 0 : trimmed.split(/\s+/).length;
}
