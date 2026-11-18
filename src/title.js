// Upper-cases the first letter of every space-separated word and lower-cases the rest.
export function titleCase(text) {
  return text
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}
