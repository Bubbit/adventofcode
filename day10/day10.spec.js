const assert = require('assert');

import { countAdapterChain, countAdapterChains } from './day10';

describe('Day 10: ', () => {
  it('test', async () => {
    assert.strictEqual(await countAdapterChain('day10/test.txt'), 35);
  });
  it('test 2 ', async () => {
    assert.strictEqual(await countAdapterChain('day10/test2.txt'), 220);
  });
  it('input', async () => {
    assert.strictEqual(await countAdapterChain('day10/input.txt'), 2263);
  });

  it('test options', async () => {
    assert.strictEqual(await countAdapterChains('day10/test.txt'), 8);
  });
  it('test options 2 ', async () => {
    assert.strictEqual(await countAdapterChains('day10/test2.txt'), 19208);
  });
  it('input options', async () => {
    assert.strictEqual(await countAdapterChains('day10/input.txt'), 396857386627072);
  });
});