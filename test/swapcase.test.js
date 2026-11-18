import { test } from 'node:test';
import assert from 'node:assert/strict';
import { swapCase } from '../src/swapcase.js';

test('swaps mixed text', () => {
  assert.equal(swapCase('Hello World 1'), 'hELLO wORLD 1');
});

test('empty string', () => {
  assert.equal(swapCase(''), '');
});

test('all lower becomes upper', () => {
  assert.equal(swapCase('abc'), 'ABC');
});

test('all upper becomes lower', () => {
  assert.equal(swapCase('ABC'), 'abc');
});

test('non-letters unchanged', () => {
  assert.equal(swapCase('123 !?-_'), '123 !?-_');
});

test('null and undefined give empty string', () => {
  assert.equal(swapCase(null), '');
  assert.equal(swapCase(undefined), '');
});

test('applying twice restores the text', () => {
  assert.equal(swapCase(swapCase('MiXeD cAsE')), 'MiXeD cAsE');
});
