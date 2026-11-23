import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isPalindrome } from '../src/palindrome.js';

test('true for a simple palindrome', () => {
  assert.equal(isPalindrome('racecar'), true);
});

test('false for a non-palindrome', () => {
  assert.equal(isPalindrome('hello'), false);
  assert.equal(isPalindrome('ab'), false);
});

test('ignores case and spaces', () => {
  assert.equal(isPalindrome('A man a plan a canal Panama'), true);
  assert.equal(isPalindrome('Never odd or even'), true);
});

test('empty string is a palindrome', () => {
  assert.equal(isPalindrome(''), true);
});
