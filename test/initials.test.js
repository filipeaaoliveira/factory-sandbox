import { test } from 'node:test';
import assert from 'node:assert/strict';
import { initials } from '../src/initials.js';

test('splits on spaces', () => {
  assert.equal(initials('Ada Lovelace'), 'AL');
});

test('splits on hyphens and upper-cases', () => {
  assert.equal(initials('jean-luc picard'), 'JLP');
});

test('empty string', () => {
  assert.equal(initials(''), '');
});

test('skips empty parts', () => {
  assert.equal(initials('  ada -- lovelace - '), 'AL');
});

test('single word', () => {
  assert.equal(initials('madonna'), 'M');
});

test('null and undefined give empty string', () => {
  assert.equal(initials(null), '');
  assert.equal(initials(undefined), '');
});
