// Turns a title into a URL slug of at most 50 characters. The separator between words is
// options.separator: '-' (default), '_' or '.'; anything else throws a TypeError. Accented letters are folded to their base letters,
// and letters that do not decompose (ß, æ, œ, ø, ł, đ, þ) are spelled out.
const SPELLED_OUT = { ß: 'ss', æ: 'ae', œ: 'oe', ø: 'o', ł: 'l', đ: 'd', þ: 'th' };

const MAX_LENGTH = 50;
const SEPARATORS = ['-', '_', '.'];

export function slug(title, { separator = '-' } = {}) {
  if (!SEPARATORS.includes(separator)) {
    throw new TypeError("slug: separator must be one of '-', '_', '.'");
  }
  const sep = `\\${separator}`; // escape for use in a regex
  const edges = new RegExp(`^${sep}+|${sep}+$`, 'g');
  const full = title
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[ßæœøłđþ]/g, (c) => SPELLED_OUT[c])
    .replace(/[^a-z0-9]+/g, separator)
    .replace(edges, '');
  return full.slice(0, MAX_LENGTH).replace(edges, '');
}
