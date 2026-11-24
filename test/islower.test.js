import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isLower } from '../src/islower.js';

test('abc is lower', () => assert.equal(isLower('abc'), true));
test('abc1 is lower', () => assert.equal(isLower('abc1'), true));
test('aBc is not lower', () => assert.equal(isLower('aBc'), false));
test('123 is not lower', () => assert.equal(isLower('123'), false));
test('empty string is not lower', () => assert.equal(isLower(''), false));
test('non-ASCII lowercase is lower', () => {
  assert.equal(isLower('école'), true);
  assert.equal(isLower('École'), false);
});
test('null and undefined are not lower', () => {
  assert.equal(isLower(null), false);
  assert.equal(isLower(undefined), false);
});
