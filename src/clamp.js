// clamp: n limited to the range from lo to hi; throws RangeError when lo > hi.
export function clamp(n, lo, hi) {
  if (lo > hi) {
    throw new RangeError('lo must not be greater than hi');
  }
  return Math.min(Math.max(n, lo), hi);
}
