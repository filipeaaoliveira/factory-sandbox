// Text helpers shared by the slug and excerpt code.

// Returns the leading whole words of `text` that fit in at most `max` characters,
// joined by single spaces. A first word longer than `max` gives an empty string.
export function truncateWords(text, max) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const kept = [];
  let length = 0;
  for (const word of words) {
    const next = kept.length === 0 ? word.length : length + 1 + word.length;
    if (next > max) break;
    kept.push(word);
    length = next;
  }
  return kept.join(' ');
}
