import { test } from 'node:test';
import assert from 'node:assert/strict';
import { wordWrap } from '../src/wrap.js';

test('wraps between words', () => {
  assert.equal(wordWrap('the quick brown fox', 10), 'the quick\nbrown fox');
});

test('exact fit at width', () => {
  assert.equal(wordWrap('abcde fghij', 5), 'abcde\nfghij');
  assert.equal(wordWrap('abc def', 7), 'abc def');
});

test('separators count toward the width', () => {
  assert.equal(wordWrap('aa bb', 4), 'aa\nbb');
  assert.equal(wordWrap('aa bb', 5), 'aa bb');
  assert.equal(wordWrap('aa bb cc', 4), 'aa\nbb\ncc');
});

test('oversized word goes alone, unbroken', () => {
  assert.equal(
    wordWrap('a supercalifragilistic b', 5),
    'a\nsupercalifragilistic\nb',
  );
});

test('whitespace runs count as one break', () => {
  assert.equal(wordWrap('a\tb\n\nc   d', 3), 'a b\nc d');
});

test('leading and trailing whitespace is ignored', () => {
  assert.equal(wordWrap('  a b  ', 10), 'a b');
});

test('empty and whitespace-only give empty string', () => {
  assert.equal(wordWrap('', 5), '');
  assert.equal(wordWrap(' \t\n ', 5), '');
});

test('width <= 0 puts each word on its own line', () => {
  assert.equal(wordWrap('a b c', 0), 'a\nb\nc');
});

test('every line fits unless it is a single word', () => {
  const text = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do';
  for (const width of [3, 6, 9, 12, 20]) {
    for (const line of wordWrap(text, width).split('\n')) {
      assert.ok(line.length <= width || !line.includes(' '));
    }
  }
});
