import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from '../src/sum.js';

test('sums an array of numbers', () => {
  assert.equal(sum([1, 2, 3]), 6);
});

test('empty array sums to 0', () => {
  assert.equal(sum([]), 0);
});

test('sums negative numbers', () => {
  assert.equal(sum([-1, -2, 5]), 2);
});
