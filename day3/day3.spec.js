const assert = require('assert');

import { countTrees, countTreesMultiple } from './day3';

describe('Day 3: Toboggan Trajectory', () => {
  describe('Count trees 3 - 1', () => {
    it('test', async () => {
      assert.strictEqual(await countTrees('day3/test.txt'), 7);
    });

    it('input', async () => {
      assert.strictEqual(await countTrees('day3/input.txt'), 156);
    });
  });

  describe('Count trees multiple', () => {
    it('test', async () => {
      assert.strictEqual(await countTreesMultiple('day3/test.txt'), 336);
    });

    it('input', async () => {
      assert.strictEqual(await countTreesMultiple('day3/input.txt'), 3521829480);
    });
  });
});