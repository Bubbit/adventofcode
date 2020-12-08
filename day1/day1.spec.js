const assert = require('assert');

import { expenses2020, readExpensesFile, expenses20203, readExpensesFile2 } from './day1';

describe('Day 1: Expenses', () => {
  describe('expense2020 * 2', () => {
    it('test', () => {
      assert.strictEqual(expenses2020([1721,
        979,
        366,
        299,
        675,
        1456]), 514579);
    });
    it('input', async () => {
      assert.strictEqual(await readExpensesFile('day1/input.txt'), 928896);
    });
  });

  describe('expense2020 * 3', () => {
    it('test', () => {
      assert.strictEqual(expenses20203([1721,
        979,
        366,
        299,
        675,
        1456]), 241861950);
    });
    it('input', async () => {
      assert.strictEqual(await readExpensesFile2('day1/input.txt'), 295668576);
    });
  });
});