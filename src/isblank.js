// isBlank: true when s is empty or holds only whitespace.
export function isBlank(s) {
  return String(s ?? '').trim() === '';
}
