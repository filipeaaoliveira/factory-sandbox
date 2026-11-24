import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isSnakeCase } from '../src/snakecase.js';

test('hello_world is snake', () => assert.equal(isSnakeCase('hello_world'), true));
test('Hello_world is not snake', () => assert.equal(isSnakeCase('Hello_world'), false));
test('double underscore is not snake', () => assert.equal(isSnakeCase('hello__world'), false));
test('single word and digits are snake', () => {
  assert.equal(isSnakeCase('hello'), true);
  assert.equal(isSnakeCase('a1_b2'), true);
});
test('leading and trailing underscores are not snake', () => {
  assert.equal(isSnakeCase('_hello'), false);
  assert.equal(isSnakeCase('hello_'), false);
});
test('empty, hyphen, null and undefined are not snake', () => {
  assert.equal(isSnakeCase(''), false);
  assert.equal(isSnakeCase('hello-world'), false);
  assert.equal(isSnakeCase(null), false);
  assert.equal(isSnakeCase(undefined), false);
});
