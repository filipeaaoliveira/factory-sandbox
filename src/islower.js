// isLower: true when s has at least one letter and none of its letters are uppercase.
export function isLower(s) {
  const str = String(s ?? '');
  return /\p{L}/u.test(str) && !/\p{Lu}/u.test(str);
}
