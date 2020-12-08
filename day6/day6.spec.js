const assert = require('assert');

import { countAnswers } from './day6';

describe('Day 6: Custom Customs', () => {
  it('countAnswers test', async () => {
    assert.strictEqual(await countAnswers('day6/test2.txt'), 6);
  });
  it('countAnswers test 2', async () => {
    assert.strictEqual(await countAnswers('day6/test.txt'), 11);
  });
  it('countAnswers input', async () => {
    assert.strictEqual(await countAnswers('day6/input.txt'), 6259);
  });
  it('countAnswers combined test', async () => {
    assert.strictEqual(await countAnswers('day6/test.txt', true), 6);
  });
  it('countAnswers combined input', async () => {
    assert.strictEqual(await countAnswers('day6/input.txt', true), 3178);
  });
});