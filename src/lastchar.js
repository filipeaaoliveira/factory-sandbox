// Returns the last character of the text (a code point, so emoji stay intact), or '' when empty.
export function lastChar(text) {
  const chars = Array.from(text);
  return chars.length ? chars[chars.length - 1] : '';
}
