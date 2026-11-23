import { test } from 'node:test';
import assert from 'node:assert/strict';
import { endsWithDigit } from '../src/endsdigit.js';

test('true when the last character is a digit', () => {
  assert.equal(endsWithDigit('abc1'), true);
  assert.equal(endsWithDigit('a9'), true);
  assert.equal(endsWithDigit('0'), true);
});

test('false when the last character is not a digit', () => {
  assert.equal(endsWithDigit('abc'), false);
  assert.equal(endsWithDigit('1a'), false);
});

test('false for an empty string', () => {
  assert.equal(endsWithDigit(''), false);
});

test('false for a trailing newline or non-ASCII digit', () => {
  assert.equal(endsWithDigit('a1\n'), false);
  assert.equal(endsWithDigit('a٣'), false);
});
