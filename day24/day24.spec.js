const assert = require('assert');

import { flipTiles, livingArt } from './day24';

describe('Day 24: ', () => {
  it('test', async () => {
    assert.strictEqual(await flipTiles('day24/test.txt'), 10);
  });
  it('input', async () => {
    assert.strictEqual(await flipTiles('day24/input.txt'), 228);
  });
  it('test', async () => {
    assert.strictEqual(await livingArt('day24/test.txt'), 2208);
  }).timeout(5000);
  it('input', async () => {
    assert.strictEqual(await livingArt('day24/input.txt'), 3672);
  }).timeout(10000);
});