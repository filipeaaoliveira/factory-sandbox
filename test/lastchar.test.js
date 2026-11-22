import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lastChar } from '../src/lastchar.js';

test('returns the last character', () => {
  assert.equal(lastChar('abc'), 'c');
});

test('returns an empty string for empty text', () => {
  assert.equal(lastChar(''), '');
});

test('works for a single character', () => {
  assert.equal(lastChar('a'), 'a');
});

test('keeps a trailing emoji intact', () => {
  assert.equal(lastChar('a😀'), '😀');
});
