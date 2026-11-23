import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chunk } from '../src/chunk.js';

test('splits with a shorter last chunk', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});
test('empty array gives empty result', () => assert.deepEqual(chunk([], 3), []));
test('n of zero throws RangeError', () => {
  assert.throws(() => chunk([1], 0), RangeError);
});
test('negative and non-integer n throw RangeError', () => {
  assert.throws(() => chunk([1], -1), RangeError);
  assert.throws(() => chunk([1], 1.5), RangeError);
});
test('exact multiple has no short chunk', () => {
  assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});
test('n larger than length gives one chunk', () => {
  assert.deepEqual(chunk([1, 2], 5), [[1, 2]]);
});
test('does not mutate the input', () => {
  const xs = [1, 2, 3];
  chunk(xs, 2);
  assert.deepEqual(xs, [1, 2, 3]);
});
