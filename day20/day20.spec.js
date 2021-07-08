const assert = require('assert');

import { part1, part2 } from './day20';

describe('Day 20: ', () => {
  it('test', async () => {
    assert.strictEqual(await part1('day20/test.txt'), 20899048083289);
  });
  it('input', async () => {
    assert.strictEqual(await part1('day20/input.txt'), 15405893262491);
  });
  it.only('test', async () => {
    assert.strictEqual(await part2('day20/test.txt'), 273);
  });
  it('input', async () => {
    // assert.strictEqual(await part2('day20/input.txt'), 0);
  });
});