// digitsOnly: true when s is a non-empty string made only of the digits 0 to 9.
export function digitsOnly(s) {
  return typeof s === 'string' && /^[0-9]+$/.test(s);
}
