// swapCase helper.

// Turns each upper-case letter of `text` to lower case and each lower-case
// letter to upper case; other characters are left as they are. null and
// undefined give ''.
export function swapCase(text) {
  if (text == null) return '';
  return Array.from(text, (ch) => {
    const up = ch.toUpperCase();
    const low = ch.toLowerCase();
    return ch === up ? low : up;
  }).join('');
}
