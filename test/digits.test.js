import { test } from 'node:test';
import assert from 'node:assert/strict';
import { digitsOnly } from '../src/digits.js';

test('digit strings are true', () => {
  for (const s of ['0', '123', '0123456789']) assert.equal(digitsOnly(s), true);
});
test('empty string is false', () => assert.equal(digitsOnly(''), false));
test('mixed or padded strings are false', () => {
  for (const s of ['abc', '12a3', ' 123', '123 ', '1 2', '-1', '1.5', '+1', '123\n']) {
    assert.equal(digitsOnly(s), false);
  }
});
test('non-ASCII digits are false', () => assert.equal(digitsOnly('١٢٣'), false));
test('non-strings are false', () => {
  for (const v of [123, null, undefined, [], {}]) assert.equal(digitsOnly(v), false);
});
