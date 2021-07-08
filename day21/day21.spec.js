const assert = require('assert');

import { countAllergens, dangerList } from './day21';

describe('Day 21: ', () => {
  it('test', async () => {
    assert.strictEqual(await countAllergens('day21/test.txt'), 5);
  });
  it('input', async () => {
    assert.strictEqual(await countAllergens('day21/input.txt'), 1829);
  });
  it('test', async () => {
    assert.strictEqual(await dangerList('day21/test.txt'), 'mxmxvkd,sqjhc,fvjkl,');
  });
  it('input', async () => {
    assert.strictEqual(await dangerList('day21/input.txt'), 'mxkh,gkcqxs,bvh,sp,rgc,krjn,bpbdlmg,tdbcfb,');
  });
});