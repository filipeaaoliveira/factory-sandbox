import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shortenWords } from '../src/shorten.js';

test('shortenWords returns text that fits whole without an ellipsis', () => {
  assert.equal(shortenWords('aa bb', 5), 'aa bb');
});

test('shortenWords adds an ellipsis when words are left out', () => {
  assert.equal(shortenWords('aa bb', 4), 'aa…');
  assert.equal(shortenWords('a b c d', 4), 'a b…');
});

test('shortenWords gives only an ellipsis when the first word is too long', () => {
  assert.equal(shortenWords('hello world', 3), '…');
});

test('shortenWords collapses whitespace runs when text fits whole', () => {
  assert.equal(shortenWords('a   b', 5), 'a b');
  assert.equal(shortenWords('a\tb', 10), 'a b');
  assert.equal(shortenWords('a\nb', 10), 'a b');
});

test('shortenWords gives an empty string for blank text', () => {
  assert.equal(shortenWords('', 5), '');
  assert.equal(shortenWords('   ', 5), '');
});
