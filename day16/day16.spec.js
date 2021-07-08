const assert = require('assert');

import { invalidTickets, findFields } from './day16';

describe('Day 16: ', () => {
  it('test', async () => {
    assert.strictEqual(await invalidTickets('day16/test.txt'), 71);
  });
  it('input', async () => {
    assert.strictEqual(await invalidTickets('day16/input.txt'), 32835);
  });
  it('test 2', async () => {
    // assert.strictEqual(await findFields('day16/test2.txt'), 71);
  });
  it.only('input 2 ', async () => {
    assert.strictEqual(await findFields('day16/input.txt'), 514662805187);
  });
});