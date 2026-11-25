import { test } from 'node:test';
import assert from 'node:assert/strict';
import { unique } from '../src/unique.js';

test('keeps first-seen order, drops repeats', () => assert.deepEqual(unique([3, 1, 3, 2, 1]), [3, 1, 2]));
test('empty array gives empty array', () => assert.deepEqual(unique([]), []));
test('does not change input and returns a new array', () => {
  const xs = [3, 1, 3, 2, 1];
  const r = unique(xs);
  assert.deepEqual(xs, [3, 1, 3, 2, 1]);
  assert.notEqual(r, xs);
});
test('compares with ===, so 1 and "1" differ', () => assert.deepEqual(unique([1, '1', 1]), [1, '1']));
