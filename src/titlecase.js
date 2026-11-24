// True when every whitespace-separated word is one uppercase letter followed only by lowercase letters.
export function isTitleCase(s) {
  const words = String(s ?? '').split(/\s+/).filter(Boolean);
  return words.every((w) => /^\p{Lu}\p{Ll}*$/u.test(w));
}
