// Counts words, as the owner asked in a note.

// Number of whitespace-separated words in `text`. Blank text, null and
// undefined give 0.
export function countWords(text) {
  if (text == null) return 0;
  const trimmed = String(text).trim();
  if (trimmed === '') return 0;
  return trimmed.split(/\s+/).length;
}
