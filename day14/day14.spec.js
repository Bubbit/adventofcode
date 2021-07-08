const assert = require('assert');

import { initMasksValue, floatingMasksValue } from './day14';

describe('Day 14: ', () => {
  it('test', async () => {
    assert.strictEqual(await initMasksValue('day14/test.txt'), 165);
  });
  it('input', async () => {
    assert.strictEqual(await initMasksValue('day14/input.txt'), 5902420735773);
  });

  it('test', async () => {
    assert.strictEqual(await floatingMasksValue('day14/test2.txt'), 208);
  });
  it('input', async () => {
    assert.strictEqual(await floatingMasksValue('day14/input.txt'), 165);
  });
});