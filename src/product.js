// product: the product of an array of numbers, or 1 for an empty array.
export function product(numbers) {
  return numbers.reduce((total, n) => total * n, 1);
}
