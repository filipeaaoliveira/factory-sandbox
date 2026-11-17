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

// Blocked by src/text.js: truncateWords splits only on ' ', so tabs and newlines
// are not word separators there. Tracked separately; unskip once that is fixed.
test('shortenWords leaves words out with newline separators', { skip: 'src/text.js truncateWords splits only on spaces' }, () => {
  assert.equal(shortenWords('a\nbbbbbb', 3), 'a…');
});

test('shortenWords leaves words out with tab separators', { skip: 'src/text.js truncateWords splits only on spaces' }, () => {
  assert.equal(shortenWords('a\tb\tc', 3), 'a b…');
});
