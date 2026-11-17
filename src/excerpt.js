// Shortens a text to at most `max` characters, ending in an ellipsis when it had to cut.
import { truncateWords } from './text.js';

const ELLIPSIS = '…';

export function excerpt(text, max) {
  if (text.length <= max) return text;
  // Not even the ellipsis fits.
  if (max < 1) return '';
  // truncateWords does not count the spaces between words, so its result can be longer than
  // the budget; shrink the budget until the joined words really fit.
  let budget = max - 1;
  let kept = budget > 0 ? truncateWords(text, budget) : '';
  while (kept.length > budget) {
    budget -= 1;
    kept = budget > 0 ? truncateWords(text, budget) : '';
  }
  return kept + ELLIPSIS;
}
