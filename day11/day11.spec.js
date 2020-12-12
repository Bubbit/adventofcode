const assert = require('assert');

import { gameOfSeats, gameOfSeats2 } from './day11';

describe('Day 11: ', () => {
  it('test', async () => {
    assert.strictEqual(await gameOfSeats('day11/test.txt'), 37);
  });
  it('input', async () => {
    assert.strictEqual(await gameOfSeats('day11/input.txt'), 2427);
  });
  it('test2', async () => {
    assert.strictEqual(await gameOfSeats2('day11/test.txt'), 26);
  });
  it('input2', async () => {
    assert.strictEqual(await gameOfSeats2('day11/input.txt'), 37);
  });
});