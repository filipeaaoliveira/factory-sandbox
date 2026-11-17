// Turns a title into a URL slug. Accented letters are folded to their base letters.
export function slug(title) {
  return title
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
