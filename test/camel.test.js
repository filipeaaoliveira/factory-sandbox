import { test } from 'node:test';
import assert from 'node:assert/strict';
import { camelCase } from '../src/camel.js';

test('joins space-separated words', () => {
  assert.equal(camelCase('hello big world'), 'helloBigWorld');
});

test('splits on underscores and hyphens', () => {
  assert.equal(camelCase('snake_case-text'), 'snakeCaseText');
});

test('empty string stays empty', () => {
  assert.equal(camelCase(''), '');
});

test('single word is lower-cased', () => {
  assert.equal(camelCase('Hello'), 'hello');
});

test('repeated, leading and trailing separators are ignored', () => {
  assert.equal(camelCase('  --foo__bar  '), 'fooBar');
});

test('mixed case input is normalised', () => {
  assert.equal(camelCase('HELLO wORLD'), 'helloWorld');
});

test('null and undefined give empty string', () => {
  assert.equal(camelCase(null), '');
  assert.equal(camelCase(undefined), '');
});
