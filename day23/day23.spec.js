const assert = require('assert');

import { cupGame, cupGame2 } from './day23';

describe('Day 23: ', () => {
  it('test', async () => {
    assert.strictEqual(await cupGame('389125467', 10), '92658374');
  });
  it('test', async () => {
    assert.strictEqual(await cupGame('389125467', 100), '67384529');
  });
  it('input', async () => {
    assert.strictEqual(await cupGame('789465123', 100), '98752463');
  });
  it('test', async () => {
    assert.strictEqual(await cupGame2('389125467'), 149245887792);
  });
  it.only('input', async () => {
    assert.strictEqual(await cupGame2('789465123'), 2000455861);
  });
});