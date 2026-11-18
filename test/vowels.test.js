import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countVowels } from '../src/vowels.js';

test('counts vowels in a phrase', () => {
  assert.equal(countVowels('Hello World'), 3);
});

test('empty string has none', () => {
  assert.equal(countVowels(''), 0);
});

test('either case is counted', () => {
  assert.equal(countVowels('AEIOU'), 5);
  assert.equal(countVowels('aeiou'), 5);
});

test('string with no vowels gives 0', () => {
  assert.equal(countVowels('rhythm'), 0);
});

test('consonants, spaces and punctuation are ignored', () => {
  assert.equal(countVowels('xyz bcd!'), 0);
});

test('repeated vowels are all counted', () => {
  assert.equal(countVowels('banana'), 3);
});

test("'AEIOUaeiou' gives 10", () => {
  assert.equal(countVowels('AEIOUaeiou'), 10);
});
