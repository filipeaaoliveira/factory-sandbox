// Turns a title into a URL slug.
export function slug(title) {
  return title.trim().toLowerCase().replace(/[^a-z0-9!]+/g, '-').replace(/^-|-$/g, '');
}
