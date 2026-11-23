import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clamp } from '../src/clamp.js';

test('returns n when within range', () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test('returns lo when n is below range', () => {
  assert.equal(clamp(-1, 0, 10), 0);
});

test('returns hi when n is above range', () => {
  assert.equal(clamp(11, 0, 10), 10);
});

test('throws RangeError when lo is greater than hi', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
});
