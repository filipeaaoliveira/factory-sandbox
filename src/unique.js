// unique: new array of xs's items in first-seen order, each value once (===).
export function unique(xs) {
  const out = [];
  for (const x of xs) {
    if (!out.some((y) => y === x)) out.push(x);
  }
  return out;
}
