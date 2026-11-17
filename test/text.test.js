import { test } from 'node:test';
import assert from 'node:assert/strict';
import { truncateWords } from '../src/text.js';

test('truncateWords counts the spaces between words', () => {
  assert.equal(truncateWords('aa bb', 4), 'aa');
  assert.equal(truncateWords('aa bb', 5), 'aa bb');
  assert.equal(truncateWords('a b c d', 4), 'a b');
});

test('truncateWords gives an empty string when the first word is too long', () => {
  assert.equal(truncateWords('hello world', 3), '');
});
