const assert = require('assert');

import { runGameConsole, fixGameConsole } from './day8';

describe('Day 8: Game Console', () => {
  it('run test', async () => {
    assert.strictEqual(await runGameConsole('day8/test.txt'), 5);
  });
  it('run input', async () => {
    assert.strictEqual(await runGameConsole('day8/input.txt'), 1475);
  });
  it('run fix test', async () => {
    assert.strictEqual(await fixGameConsole('day8/test.txt'), 8);
  });
  it('run fix input', async () => {
    assert.strictEqual(await fixGameConsole('day8/input.txt'), 1270);
  });
});