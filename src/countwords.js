export function countWords(s) {
  if (typeof s !== 'string') return 0;
  const t = s.trim();
  return t === '' ? 0 : t.split(/\s+/).length;
}
