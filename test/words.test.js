import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countWords } from '../src/words.js';

test('multiple spaces', () => {
  assert.equal(countWords('a b  c'), 3);
});

test('blank', () => {
  assert.equal(countWords('  '), 0);
});

test('empty string', () => {
  assert.equal(countWords(''), 0);
});

test('single word', () => {
  assert.equal(countWords('hello'), 1);
});

test('tabs and newlines', () => {
  assert.equal(countWords('a\tb\nc'), 3);
});

test('leading and trailing whitespace', () => {
  assert.equal(countWords('  hi there '), 2);
});

test('null and undefined', () => {
  assert.equal(countWords(null), 0);
  assert.equal(countWords(undefined), 0);
});
