import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isEven } from '../src/iseven.js';

test('4 is even', () => assert.equal(isEven(4), true));
test('7 is odd', () => assert.equal(isEven(7), false));
test('0 is even', () => assert.equal(isEven(0), true));
test('negatives', () => {
  assert.equal(isEven(-2), true);
  assert.equal(isEven(-3), false);
});
