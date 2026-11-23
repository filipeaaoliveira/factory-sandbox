// middleChar: the middle character of a string (left of the two middle ones for even length), or '' for an empty string.
export function middleChar(s) {
  if (s.length === 0) return '';
  return s[Math.ceil(s.length / 2) - 1];
}
