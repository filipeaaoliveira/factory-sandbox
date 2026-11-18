import { test } from 'node:test';
import assert from 'node:assert/strict';
import { to_snake_case } from '../src/snake.js';

const cases = [
  ['Hello World', 'hello_world'],
  ['a__b', 'a_b'],
  ['a___b__c', 'a_b_c'],
  ['Hello   World', 'hello_world'],
  ['Hello _ World', 'hello_world'],
  ['  Hello World  ', 'hello_world'],
  ['  leading', 'leading'],
  ['trailing  ', 'trailing'],
  ['_a_', 'a'],
  ['', ''],
  ['abc', 'abc'],
];
for (const [input, expected] of cases) {
  test(`to_snake_case(${JSON.stringify(input)}) gives ${JSON.stringify(expected)}`, () => {
    assert.equal(to_snake_case(input), expected);
  });
}

test('to_snake_case returns "" for null and undefined', () => {
  assert.equal(to_snake_case(null), '');
  assert.equal(to_snake_case(undefined), '');
});
