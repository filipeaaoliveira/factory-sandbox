import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isUpper } from '../src/isupper.js';

test('all uppercase is upper', () => assert.equal(isUpper('ABC'), true));
test('mixed case is not upper', () => assert.equal(isUpper('AbC'), false));
test('all lowercase is not upper', () => assert.equal(isUpper('abc'), false));
test('empty string is not upper', () => assert.equal(isUpper(''), false));
test('no letters is not upper', () => assert.equal(isUpper('123 !?'), false));
test('non-letters are ignored', () => assert.equal(isUpper('A1 B-2'), true));
test('non-ASCII uppercase is upper', () => {
  assert.equal(isUpper('ÉCOLE'), true);
  assert.equal(isUpper('École'), false);
});
test('null and undefined are not upper', () => {
  assert.equal(isUpper(null), false);
  assert.equal(isUpper(undefined), false);
});
