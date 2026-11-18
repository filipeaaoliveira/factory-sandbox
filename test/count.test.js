import { test } from 'node:test';
import assert from 'node:assert/strict';
import { wordCount, charCount } from '../src/count.js';

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

test('wordCount of null is 0', () => {
  assert.equal(wordCount(null), 0);
});

test('wordCount of undefined is 0', () => {
  assert.equal(wordCount(undefined), 0);
});

test('wordCount counts words', () => {
  assert.equal(wordCount('hello world'), 2);
  assert.equal(wordCount(' a  b\tc\n'), 3);
});

test('wordCount of empty or blank text is 0', () => {
  assert.equal(wordCount(''), 0);
  assert.equal(wordCount('  \t\n '), 0);
});
