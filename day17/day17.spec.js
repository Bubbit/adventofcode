const assert = require('assert');

import { gameOfCubes, gameOfCubes2 } from './day17';

describe('Day 17: ', () => {
  it('test', async () => {
    assert.strictEqual(await gameOfCubes('day17/test.txt', 6), 112);
  });
  it('input', async () => {
    assert.strictEqual(await gameOfCubes('day17/input.txt', 6), 368);
  });
  it('test 2', async () => {
    assert.strictEqual(await gameOfCubes2('day17/test.txt', 6), 848);
  }).timeout(5000);
  it('input 2', async () => {
    assert.strictEqual(await gameOfCubes2('day17/input.txt', 6), 2696);
  }).timeout(5000);
});