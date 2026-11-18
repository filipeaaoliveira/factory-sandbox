// initials helper.

// Upper-case first letter of each word in `name`, splitting on spaces and
// hyphens and skipping empty parts. null and undefined give ''.
export function initials(name) {
  if (name == null) return '';
  return String(name)
    .split(/[ -]/)
    .filter((part) => part !== '')
    .map((part) => Array.from(part)[0].toUpperCase())
    .join('');
}
