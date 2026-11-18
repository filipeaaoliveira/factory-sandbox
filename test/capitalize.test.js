import { test } from 'node:test';
import assert from 'node:assert/strict';
import { capitalize } from '../src/capitalize.js';

test('capitalizes the first letter', () => {
  assert.equal(capitalize('hello world'), 'Hello world');
});

test('empty string stays empty', () => {
  assert.equal(capitalize(''), '');
});

test('single character', () => {
  assert.equal(capitalize('a'), 'A');
});

test('already capitalized stays the same', () => {
  assert.equal(capitalize('Hello'), 'Hello');
});

test('leaves the rest alone', () => {
  assert.equal(capitalize('hELLO wORLD'), 'HELLO wORLD');
});

test('non-letter first character changes nothing', () => {
  assert.equal(capitalize('1abc'), '1abc');
  assert.equal(capitalize(' abc'), ' abc');
  assert.equal(capitalize('-x'), '-x');
});
