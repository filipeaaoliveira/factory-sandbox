// First-word helper.

// Returns the first whitespace-separated word of `text`; text with no word,
// null and undefined give an empty string.
export function firstWord(text) {
  if (text == null) return '';
  const trimmed = text.trim();
  return trimmed === '' ? '' : trimmed.split(/\s+/)[0];
}
