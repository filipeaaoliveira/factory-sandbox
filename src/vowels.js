// Returns how many of the letters a, e, i, o, u (either case) the text has.
export function countVowels(text) {
  return (text.match(/[aeiou]/gi) ?? []).length;
}
