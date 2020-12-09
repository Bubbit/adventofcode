const assert = require('assert');

import { XMASdecoding } from './day9';

describe('Day 9: ', () => {
    it('test', async () => {
      assert.strictEqual(await XMASdecoding('day9/test.txt', 5), 127);
    });
    it('input', async () => {
      assert.strictEqual(await XMASdecoding('day9/input.txt', 25), 1398413738);
    });
    it('test contiguous', async () => {
      assert.strictEqual(await XMASdecoding('day9/test.txt', 5, true), 62);
    });
    it('input contiguous', async () => {
      assert.strictEqual(await XMASdecoding('day9/input.txt', 25, true), 169521051);
    });
});