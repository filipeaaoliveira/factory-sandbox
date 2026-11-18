// padLeft helper.

// Pad `text` on the left with `fill` until it is `width` characters long.
// Returns text unchanged when already that long or longer, or when fill is ''.
// null and undefined are treated as ''.
export function padLeft(text, width, fill = ' ') {
  const str = text == null ? '' : String(text);
  fill = String(fill);
  if (!Number.isFinite(width) || str.length >= width || fill === '') return str;
  const missing = width - str.length;
  const pad = fill.repeat(Math.ceil(missing / fill.length)).slice(0, missing);
  return pad + str;
}
