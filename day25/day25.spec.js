const assert = require('assert');

import { encrytionKey } from './day25';

describe('Day 25: ', () => {
  it('test', async () => {
    assert.strictEqual(await encrytionKey(5764801, 17807724), 14897079);
  });
  it('input', async () => {
    assert.strictEqual(await encrytionKey(9232416, 14144084), 1478097);
  });
});