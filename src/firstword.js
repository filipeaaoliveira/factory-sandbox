// firstWord: the first whitespace-separated word of text, or '' when there is none.
export function firstWord(text) {
  if (text == null) return '';
  const trimmed = String(text).trim();
  return trimmed === '' ? '' : trimmed.split(/\s+/)[0];
}
