// middleChar: the middle character of a string, the left of the two for even length, '' for empty.
export function middleChar(s) {
  if (s.length === 0) return '';
  return s[Math.ceil(s.length / 2) - 1];
}
