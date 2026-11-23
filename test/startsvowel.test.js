import { test } from 'node:test';
import assert from 'node:assert/strict';
import { startsWithVowel } from '../src/startsvowel.js';

test('true for lowercase vowels', () => {
  for (const s of ['apple', 'egg', 'ice', 'orange', 'umbrella']) assert.equal(startsWithVowel(s), true);
});

test('true for uppercase vowels', () => {
  assert.equal(startsWithVowel('Apple'), true);
  assert.equal(startsWithVowel('UMBRELLA'), true);
});

test('false for consonants', () => {
  assert.equal(startsWithVowel('banana'), false);
  assert.equal(startsWithVowel('Zed'), false);
});

test('false for empty, whitespace-led, digit-led and y', () => {
  for (const s of ['', ' apple', '1a', 'yes']) assert.equal(startsWithVowel(s), false);
});
