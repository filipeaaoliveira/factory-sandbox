// isUpper: true when s has at least one letter and none of its letters are lowercase.
export function isUpper(s) {
  const str = String(s ?? '');
  return /\p{L}/u.test(str) && !/\p{Ll}/u.test(str);
}
