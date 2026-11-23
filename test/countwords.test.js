import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countWords } from '../src/countwords.js';

test('empty string is 0', () => assert.equal(countWords(''), 0));
test('whitespace-only is 0', () => assert.equal(countWords(' \t\n '), 0));
test('single word is 1', () => assert.equal(countWords('hello'), 1));
test('multiple words', () => assert.equal(countWords('hello big world'), 3));
test('mixed whitespace', () => assert.equal(countWords('  a\tb\n c  '), 3));
test('null is 0', () => assert.equal(countWords(null), 0));
