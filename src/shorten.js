// Word shortener helper.
import { truncateWords } from './text.js';

// Returns the leading whole words of `text` that fit in `max` characters,
// joined by single spaces, followed by an ellipsis when any word was left out.
// Any run of whitespace separates words.
// Example:
//   shortenWords('the quick brown fox', 12); // 'the quick…'
//   shortenWords('the  quick', 20);          // 'the quick'
export function shortenWords(text, max) {
  const kept = truncateWords(text, max);
  const keptWords = kept.split(/\s+/).filter(Boolean);
  const trimmed = text.trim();
  const total = trimmed === '' ? 0 : trimmed.split(/\s+/).length;
  const result = keptWords.join(' ');
  return keptWords.length < total ? result + '…' : result;
}
