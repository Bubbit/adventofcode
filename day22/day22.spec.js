const assert = require('assert');

import { playCombat, playRaftCaptain } from './day22';

describe('Day 22: ', () => {
  it('test', async () => {
    assert.strictEqual(await playCombat('day22/test.txt'), 306);
  });
  it('input', async () => {
    assert.strictEqual(await playCombat('day22/input.txt'), 30197);
  });

  it('test', async () => {
    assert.strictEqual(await playRaftCaptain('day22/test.txt'), 291);
  });
  it('input', async () => {
    assert.strictEqual(await playRaftCaptain('day22/input.txt'), 306);
  });
});