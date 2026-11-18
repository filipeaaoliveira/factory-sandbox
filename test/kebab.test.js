import { test } from 'node:test';
import assert from 'node:assert/strict';
import { kebabCase } from '../src/kebab.js';

const cases = [
  ['Hello Big World', 'hello-big-world'],
  ['snake_case', 'snake-case'],
  ['', ''],
  ['a  b__c', 'a-b-c'],
  [' _a_ ', 'a'],
  [null, ''],
  [undefined, ''],
  ['word', 'word'],
];

for (const [input, expected] of cases) {
  test(`kebabCase(${JSON.stringify(input)}) gives ${JSON.stringify(expected)}`, () => {
    assert.equal(kebabCase(input), expected);
  });
}
