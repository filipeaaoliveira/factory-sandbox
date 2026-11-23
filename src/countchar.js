// countChar: how many times the single character c occurs in s (case-sensitive).
export function countChar(s, c) {
  if (typeof s !== 'string' || typeof c !== 'string' || c.length !== 1) return 0;
  return s.split(c).length - 1;
}
