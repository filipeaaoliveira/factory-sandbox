// startsWithVowel: true when the string starts with a, e, i, o or u, in either case.
export function startsWithVowel(s) {
  return /^[aeiou]/i.test(s);
}
