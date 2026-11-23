import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countChar } from '../src/countchar.js';

test('counts repeated char', () => {
  assert.equal(countChar('banana', 'a'), 3);
});

test('absent char is 0', () => {
  assert.equal(countChar('banana', 'z'), 0);
});

test('empty string is 0', () => {
  assert.equal(countChar('', 'a'), 0);
});

test('is case-sensitive', () => {
  assert.equal(countChar('Aa', 'a'), 1);
});

test('counts non-letter char', () => {
  assert.equal(countChar('a-b-c', '-'), 2);
});

test('multi-char c returns 0', () => {
  assert.equal(countChar('banana', 'an'), 0);
});
