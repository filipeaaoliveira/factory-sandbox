import { test } from 'node:test';
import assert from 'node:assert/strict';
import { middleChar } from '../src/middle.js';

test('returns the middle of an odd-length string', () => {
  assert.equal(middleChar('abc'), 'b');
  assert.equal(middleChar('abcde'), 'c');
});

test('returns the left middle for even length', () => {
  assert.equal(middleChar('abcd'), 'b');
  assert.equal(middleChar('ab'), 'a');
});

test('single character', () => {
  assert.equal(middleChar('x'), 'x');
});

test('empty string returns empty string', () => {
  assert.equal(middleChar(''), '');
});
