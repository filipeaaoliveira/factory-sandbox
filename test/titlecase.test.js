import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isTitleCase } from '../src/titlecase.js';

test('Hello World is title case', () => {
  assert.equal(isTitleCase('Hello World'), true);
});

test('Hello world is not title case', () => {
  assert.equal(isTitleCase('Hello world'), false);
});

test('empty string is title case', () => {
  assert.equal(isTitleCase(''), true);
});

test('all caps, all lower and inner caps are not title case', () => {
  assert.equal(isTitleCase('HELLO'), false);
  assert.equal(isTitleCase('hello'), false);
  assert.equal(isTitleCase('hELLO'), false);
});

test('single letter is title case', () => {
  assert.equal(isTitleCase('A'), true);
});

test('extra whitespace and tab/newline separators', () => {
  assert.equal(isTitleCase('  Hello \t World\nAgain  '), true);
});

test('non-ASCII letters', () => {
  assert.equal(isTitleCase('École Élan'), true);
});

test('null and undefined are title case', () => {
  assert.equal(isTitleCase(null), true);
  assert.equal(isTitleCase(undefined), true);
});
