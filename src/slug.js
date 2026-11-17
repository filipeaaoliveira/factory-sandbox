// Turns a title into a URL slug. Accented letters are folded to their base letters,
// and letters that do not decompose (ß, æ, œ, ø, ł, đ, þ) are spelled out.
const SPELLED_OUT = { ß: 'ss', æ: 'ae', œ: 'oe', ø: 'o', ł: 'l', đ: 'd', þ: 'th' };

export function slug(title) {
  return title
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[ßæœøłđþ]/g, (c) => SPELLED_OUT[c])
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
