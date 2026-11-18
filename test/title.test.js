import { test } from 'node:test';
import assert from 'node:assert/strict';
import { titleCase } from '../src/title.js';

test('title-cases each word', () => {
  assert.equal(titleCase('hello big WORLD'), 'Hello Big World');
});

test('empty string stays empty', () => {
  assert.equal(titleCase(''), '');
});

test('single character', () => {
  assert.equal(titleCase('a'), 'A');
});

test('already title-cased stays the same', () => {
  assert.equal(titleCase('Hello Big World'), 'Hello Big World');
});

test('all caps', () => {
  assert.equal(titleCase('HELLO'), 'Hello');
});

test('preserves multiple, leading and trailing spaces', () => {
  assert.equal(titleCase('  hi  there '), '  Hi  There ');
});

test('non-letter first character changes nothing', () => {
  assert.equal(titleCase('1abc'), '1abc');
});
