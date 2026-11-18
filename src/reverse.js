// Returns the text with its characters in reverse order (code points, so emoji stay intact).
export function reverse(text) {
  return Array.from(text).reverse().join('');
}
