const assert = require('assert');

import { checkEarliestBus, busContest } from './day13';

describe('Day 13: ', () => {
  it('test', async () => {
    assert.strictEqual(await checkEarliestBus('day13/test.txt'), 295);
  });
  it('input', async () => {
    assert.strictEqual(await checkEarliestBus('day13/input.txt'), 3606);
  });

  it('test 2-1', async () => {
    assert.strictEqual(await busContest('day13/test.txt'), 1068781);
  });
  it('test 2-2', async () => {
    assert.strictEqual(await busContest('day13/test2.txt'), 3417);
  });
  it('test 2-3', async () => {
    assert.strictEqual(await busContest('day13/test3.txt'), 1202161486);
  });
  it('input 2', async () => {
    assert.strictEqual(await busContest('day13/input.txt'), 379786358533423);
  });
});