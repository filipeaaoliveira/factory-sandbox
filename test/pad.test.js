import { test } from 'node:test';
import assert from 'node:assert/strict';
import { padLeft } from '../src/pad.js';

test('pads with fill', () => {
  assert.equal(padLeft('7', 3, '0'), '007');
});
test('returns longer text unchanged', () => {
  assert.equal(padLeft('hello', 3), 'hello');
});
test('exact width unchanged', () => {
  assert.equal(padLeft('abc', 3), 'abc');
});
test('default fill is space', () => {
  assert.equal(padLeft('7', 3), '  7');
});
test('multi-char fill is truncated', () => {
  assert.equal(padLeft('7', 6, 'ab'), 'ababa7');
});
test('empty fill returns text', () => {
  assert.equal(padLeft('x', 3, ''), 'x');
});
test('empty text', () => {
  assert.equal(padLeft('', 2, '-'), '--');
});
test('null text', () => {
  assert.equal(padLeft(null, 2), '  ');
});
