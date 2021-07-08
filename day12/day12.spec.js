const assert = require('assert');

import { manhattanDistance, manhattanDistanceWayPoint } from './day12';

describe('Day 12: ', () => {
  it('test', async () => {
    assert.strictEqual(await manhattanDistance('day12/test.txt'), 25);
  });
  it('input', async () => {
    assert.strictEqual(await manhattanDistance('day12/input.txt'), 2270);
  });
  it('test 2', async () => {
    assert.strictEqual(await manhattanDistanceWayPoint('day12/test.txt'), 286);
  });
  it('input 2', async () => {
    assert.strictEqual(await manhattanDistanceWayPoint('day12/input.txt'), 138669);
  });
});