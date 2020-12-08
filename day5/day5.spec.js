const assert = require('assert');

import { findSeat, findHighestSeat, findOwnSeat } from './day5';

describe('Day 5: Boarding pass', () => {
  it('findSeat test', async () => {
    assert.strictEqual(await findSeat('BFFFBBFRRR'), 567);
  });
  it('findSeat test 2', async () => {
    assert.strictEqual(await findSeat('FFFBBBFRRR'), 119);
  });
  it('findSeat test 3', async () => {
    assert.strictEqual(await findSeat('BBFFBBFRLL'), 820);
  });
  it('highest seat', async () => {
    assert.strictEqual(await findHighestSeat('day5/input.txt'), 888);
  });
  it('own seat', async () => {
    assert.strictEqual(await findOwnSeat('day5/input.txt'), 522);
  });
});