const assert = require('assert');

import { checkPassword, checkPassword2, readPasswordFile, readPasswordFile2 } from './day2';

describe('Day 2: password check', () => {
  describe('Policy 1', () => {
    it('test 1', () => {
      assert.strictEqual(checkPassword('1-3 a: abcde'), true);
    });
    it('test 2', () => {
      assert.strictEqual(checkPassword('1-3 b: cdefg'), false);
    });
    it('test 3', () => {
      assert.strictEqual(checkPassword('2-9 c: ccccccccc'), true);
    });
    it('input', async () => {
      assert.strictEqual(await readPasswordFile('day2/input.txt'), 506);
    });
  });

  describe('Policy 2', () => {
    it('test 1', () => {
      assert.strictEqual(checkPassword2('1-3 a: abcde'), 1);
    });
    it('test 2', () => {
      assert.strictEqual(checkPassword2('1-3 b: cdefg'), 0);
    });
    it('test 3', () => {
      assert.strictEqual(checkPassword2('2-9 c: ccccccccc'), 0);
    });
    it('input', async () => {
      assert.strictEqual(await readPasswordFile2('day2/input.txt'), 443);
    });
  });
});