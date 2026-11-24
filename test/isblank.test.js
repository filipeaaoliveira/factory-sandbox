import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isBlank } from '../src/isblank.js';

test('empty string is blank', () => assert.equal(isBlank(''), true));
test('spaces and tab are blank', () => assert.equal(isBlank('  \t'), true));
test('text with surrounding space is not blank', () => assert.equal(isBlank(' a '), false));
test('newline and CR only is blank', () => assert.equal(isBlank('\n\r'), true));
test('null and undefined are blank', () => {
  assert.equal(isBlank(null), true);
  assert.equal(isBlank(undefined), true);
});
