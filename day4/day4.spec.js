const assert = require('assert');

import { countPassports } from './day4';

describe('Day 4: Passport Processing', () => {
  describe('Check passport fields', () => {
    it('test', async () => {
      assert.strictEqual(await countPassports('day4/test.txt'), 2);
    });

    it('input', async () => {
      assert.strictEqual(await countPassports('day4/input.txt'), 213);
    });
  });

  describe('Validate passport fields', () => {
    it('test', async () => {
      assert.strictEqual(await countPassports('day4/test2.txt', true), 4);
    });

    it('input', async () => {
      assert.strictEqual(await countPassports('day4/input.txt', true), 147);
    });
  });
});