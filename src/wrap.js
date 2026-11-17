import { truncateWords } from './text.js';

// Splits `text` into lines of at most `width` characters, breaking only between
// words. A word longer than `width` sits alone on its line, unbroken. Any run of
// whitespace counts as one break. Lines are joined with a newline.
export function wordWrap(text, width) {
  let words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  while (words.length > 0) {
    const first = words[0];
    let line = first;
    if (first.length < width) {
      // truncateWords ignores the separating spaces when counting, so it can
      // return a line longer than its limit; lower the limit until the real
      // line fits. m = first.length always yields at least the first word.
      for (let m = width; m >= first.length; m--) {
        const candidate = truncateWords(words.join(' '), m);
        if (candidate.length <= width) {
          line = candidate;
          break;
        }
      }
    }
    lines.push(line);
    words = words.slice(line.split(' ').length);
  }
  return lines.join('\n');
}
