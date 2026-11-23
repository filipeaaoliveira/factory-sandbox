// isPalindrome: true when the string reads the same backwards, ignoring case and spaces.
export function isPalindrome(s) {
  const normalized = s.toLowerCase().replace(/\s/g, '');
  return normalized === [...normalized].reverse().join('');
}
