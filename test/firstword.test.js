import { test } from 'node:test';
import assert from 'node:assert/strict';
import { firstWord } from '../src/firstword.js';

test('returns the first word', () => {
  assert.equal(firstWord('  hello world'), 'hello');
});

test('blank text has no word', () => {
  assert.equal(firstWord('   '), '');
});

test('empty string has no word', () => {
  assert.equal(firstWord(''), '');
});

test('tabs and newlines separate words', () => {
  assert.equal(firstWord('\tfoo\nbar'), 'foo');
});

test('single word returns itself', () => {
  assert.equal(firstWord('solo'), 'solo');
});

test('null has no word', () => {
  assert.equal(firstWord(null), '');
});
