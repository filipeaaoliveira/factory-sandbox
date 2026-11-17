// Turns a title into a URL slug of at most 50 characters. Accented letters are folded to their base letters,
// and letters that do not decompose (ß, æ, œ, ø, ł, đ, þ) are spelled out.
const SPELLED_OUT = { ß: 'ss', æ: 'ae', œ: 'oe', ø: 'o', ł: 'l', đ: 'd', þ: 'th' };

const MAX_LENGTH = 50;

export function slug(title) {
  const full = title
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[ßæœøłđþ]/g, (c) => SPELLED_OUT[c])
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return full.slice(0, MAX_LENGTH).replace(/-+$/, '');
}
