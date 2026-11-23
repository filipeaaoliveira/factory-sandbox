// lastIndexOfChar: last index of the single character c in s, or -1 (case-sensitive).
export function lastIndexOfChar(s, c) {
  if (typeof s !== 'string' || typeof c !== 'string' || c.length !== 1) return -1;
  return s.lastIndexOf(c);
}
