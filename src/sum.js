// sum: the total of an array of numbers, or 0 for an empty array.
export function sum(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
