const assert = require('assert');

import { matchRules, matchRules2 } from './day19';

describe('Day 19: ', () => {
  it('test', async () => {
    assert.strictEqual(await matchRules('day19/test.txt'), 2);
  });
  it('input', async () => {
    assert.strictEqual(await matchRules('day19/input.txt'), 122);
  });

  it('test 2', async () => {
    assert.strictEqual(await matchRules2('day19/test2.txt'), 12);
  });
  it('input 2', async () => {
    assert.strictEqual(await matchRules2('day19/input.txt'), 287);
  });
});