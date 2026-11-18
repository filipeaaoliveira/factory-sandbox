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

test('caps slugs at 50 characters', () => {
  assert.equal(slug('a'.repeat(80)).length, 50);
  assert.equal(slug('a'.repeat(50)), 'a'.repeat(50));
  assert.equal(slug('a'.repeat(51)), 'a'.repeat(50));
});

test('does not leave a trailing dash after the cut', () => {
  assert.equal(slug('a'.repeat(49) + ' b'), 'a'.repeat(49));
  const s = slug('the quick brown fox jumps over the lazy dog again and again and again');
  assert.ok(s.length <= 50);
  assert.ok(!s.startsWith('-') && !s.endsWith('-'));
});

test('keeps digits', () => {
  assert.equal(slug('Top 10 Tips'), 'top-10-tips');
});

for (const [sep, hello] of [['_', 'hello_world'], ['.', 'hello.world']]) {
  test(`separator ${sep}`, () => {
    assert.equal(slug('Hello, World!', { separator: sep }), hello);
    assert.equal(slug('a --- b', { separator: sep }), `a${sep}b`);
    assert.equal(slug('--a--', { separator: sep }), 'a');
    assert.equal(slug('  ', { separator: sep }), '');
    const long = slug('word '.repeat(30), { separator: sep });
    assert.ok(long.length <= 50);
    assert.ok(!long.endsWith(sep));
  });
}

test('default separator options', () => {
  assert.equal(slug('a b', { separator: '-' }), 'a-b');
  assert.equal(slug('a b', {}), 'a-b');
  assert.equal(slug('a b', { separator: undefined }), 'a-b');
});

test('rejects other separators', () => {
  for (const separator of [' ', '', '--', 'x', 1, null]) {
    assert.throws(() => slug('a b', { separator }), TypeError);
  }
});
