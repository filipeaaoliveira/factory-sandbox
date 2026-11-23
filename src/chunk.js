export function chunk(xs, n) {
  if (!Number.isInteger(n) || n < 1) throw new RangeError('n must be a positive integer');
  const out = [];
  for (let i = 0; i < xs.length; i += n) out.push(xs.slice(i, i + n));
  return out;
}
