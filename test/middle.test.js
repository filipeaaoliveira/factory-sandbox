import { test } from 'node:test';
import assert from 'node:assert/strict';
import { middleChar } from '../src/middle.js';

test('odd length returns the middle character', () => {
  assert.equal(middleChar('abc'), 'b');
  assert.equal(middleChar('hello'), 'l');
});

test('even length returns the left of the two middle characters', () => {
  assert.equal(middleChar('abcd'), 'b');
  assert.equal(middleChar('ab'), 'a');
});

test('single character returns itself', () => {
  assert.equal(middleChar('x'), 'x');
});

test('empty string returns empty string', () => {
  assert.equal(middleChar(''), '');
});
