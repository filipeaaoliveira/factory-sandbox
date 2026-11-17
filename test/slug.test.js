import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slug } from '../src/slug.js';

test('slugs a title', () => {
  assert.equal(slug('  Hello, World! '), 'hello-world');
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

test('turns tabs between words into a single dash', () => {
  assert.equal(slug('a\tb'), 'a-b');
  assert.equal(slug('hello\t\tworld'), 'hello-world');
  assert.equal(slug('a \t b'), 'a-b');
});

test('slug of a string with only spaces is an empty string', () => {
  assert.equal(slug('   '), '');
});

test('drops exclamation marks', () => {
  assert.equal(slug('Hello, World!'), 'hello-world');
  assert.equal(slug('Wow!!! Great'), 'wow-great');
  assert.equal(slug('!!!'), '');
  assert.equal(slug('a!b'), 'a-b');
});

test('folds accented letters to their base letters', () => {
  assert.equal(slug('Café Olé'), 'cafe-ole');
  assert.equal(slug('Crème Brûlée'), 'creme-brulee');
  assert.equal(slug('ÀÉÎÕÜ'), 'aeiou');
});

test('spells out letters with no accent to fold', () => {
  assert.equal(slug('Straße'), 'strasse');
  assert.equal(slug('Øresund'), 'oresund');
  assert.equal(slug('Æon'), 'aeon');
  assert.equal(slug('Œuvre'), 'oeuvre');
  assert.equal(slug('Łódź'), 'lodz');
  assert.equal(slug('Đorđe'), 'dorde');
  assert.equal(slug('Þór'), 'thor');
  assert.equal(slug('STRASSE ẞ'), 'strasse-ss');
  assert.equal(slug('ßæœøłđþ'), 'ssaeoeoldth');
});
