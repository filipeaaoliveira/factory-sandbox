import { test } from 'node:test';
import assert from 'node:assert/strict';
import { product } from '../src/product.js';

test('multiplies an array of numbers', () => {
  assert.equal(product([2, 3, 4]), 24);
});

test('empty array multiplies to 1', () => {
  assert.equal(product([]), 1);
});
