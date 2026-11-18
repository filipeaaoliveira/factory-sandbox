// Upper-cases the first character of the text and leaves the rest as it is.
export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
