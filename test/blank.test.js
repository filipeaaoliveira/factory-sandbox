import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isBlank } from '../src/blank.js';

test('empty string is blank', () => assert.equal(isBlank(''), true));
test('whitespace-only is blank', () => assert.equal(isBlank('   '), true));
test('tabs and newlines are blank', () => assert.equal(isBlank(' \t\n\r '), true));
test('text is not blank', () => assert.equal(isBlank('a'), false));
test('text with surrounding space is not blank', () => assert.equal(isBlank('  a  '), false));
