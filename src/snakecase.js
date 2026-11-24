// isSnakeCase: true when s is non-empty and made of lowercase letters/digits joined by single underscores.
export function isSnakeCase(s) {
  const str = typeof s === 'string' ? s : '';
  return /^[a-z0-9]+(_[a-z0-9]+)*$/.test(str);
}
