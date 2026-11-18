// repeatText helper.

// `text` repeated `times` times, joined by `separator`. Gives '' when times
// is 0 or less (or not a number); fractional times are floored.
export function repeatText(text, times, separator = '') {
  if (!(times > 0)) return '';
  return Array(Math.floor(times)).fill(String(text)).join(separator);
}
