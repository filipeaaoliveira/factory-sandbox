import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reverse } from '../src/reverse.js';

test('reverses a string', () => {
  assert.equal(reverse('abc'), 'cba');
});

test('empty string stays empty', () => {
  assert.equal(reverse(''), '');
});

test('single character is unchanged', () => {
  assert.equal(reverse('a'), 'a');
});

test('palindrome is unchanged', () => {
  assert.equal(reverse('racecar'), 'racecar');
});

test('spaces and punctuation are reversed too', () => {
  assert.equal(reverse('a b!'), '!b a');
});

test('surrogate-pair emoji are not split', () => {
  assert.equal(reverse('a😀b'), 'b😀a');
});
