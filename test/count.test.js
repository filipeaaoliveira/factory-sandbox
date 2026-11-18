import { test } from 'node:test';
import assert from 'node:assert/strict';
import { charCount } from '../src/count.js';

test('counts characters in a word', () => {
  assert.equal(charCount('hello'), 5);
});

test('ignores spaces between words', () => {
  assert.equal(charCount('a b  c'), 3);
});

test('ignores tabs, newlines and surrounding whitespace', () => {
  assert.equal(charCount(' a\tb\nc\r\n '), 3);
});

test('empty text has 0 characters', () => {
  assert.equal(charCount(''), 0);
});

test('blank text has 0 characters', () => {
  assert.equal(charCount('   \t\n '), 0);
});
