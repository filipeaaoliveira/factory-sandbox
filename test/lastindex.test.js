import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lastIndexOfChar } from '../src/lastindex.js';

test('finds last of repeated char', () => {
  assert.equal(lastIndexOfChar('banana', 'a'), 5);
});
test('single occurrence', () => {
  assert.equal(lastIndexOfChar('banana', 'b'), 0);
});
test('absent char is -1', () => {
  assert.equal(lastIndexOfChar('banana', 'z'), -1);
});
test('empty string is -1', () => {
  assert.equal(lastIndexOfChar('', 'a'), -1);
});
test('is case-sensitive', () => {
  assert.equal(lastIndexOfChar('Aa', 'A'), 0);
  assert.equal(lastIndexOfChar('aA', 'a'), 0);
});
test('non-letter char', () => {
  assert.equal(lastIndexOfChar('a-b-c', '-'), 3);
});
test('multi-char or empty c returns -1', () => {
  assert.equal(lastIndexOfChar('banana', 'an'), -1);
  assert.equal(lastIndexOfChar('banana', ''), -1);
});
test('non-string input returns -1', () => {
  assert.equal(lastIndexOfChar(null, 'a'), -1);
  assert.equal(lastIndexOfChar('a', 1), -1);
  assert.equal(lastIndexOfChar(undefined, undefined), -1);
});
