import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slug } from '../src/slug.js';

test('slugs a title', () => {
  assert.equal(slug('  Hello, World! '), 'hello-world!');
});

test('collapses repeated dashes', () => {
  assert.equal(slug('a--b'), 'a-b');
  assert.equal(slug('a --- b'), 'a-b');
  assert.equal(slug('Hello,  -  World'), 'hello-world');
});

test('trims dashes at the ends', () => {
  assert.equal(slug('--a--'), 'a');
});

test('slug of an empty string is an empty string', () => {
  assert.equal(slug(''), '');
});
