import { test } from 'node:test';
import assert from 'node:assert/strict';
import { repeatText } from '../src/repeat.js';

test('repeats text', () => {
  assert.equal(repeatText('ab', 3), 'ababab');
});

test('joins with separator', () => {
  assert.equal(repeatText('x', 2, '-'), 'x-x');
});

test('times 0 gives empty string', () => {
  assert.equal(repeatText('a', 0), '');
});

test('negative times gives empty string', () => {
  assert.equal(repeatText('a', -2), '');
});

test('times 1 has no separator', () => {
  assert.equal(repeatText('a', 1, ','), 'a');
});

test('multi-char separator', () => {
  assert.equal(repeatText('a', 3, ', '), 'a, a, a');
});

test('empty text', () => {
  assert.equal(repeatText('', 3, '-'), '--');
});
