const assert = require('assert');

import { shitMath } from './day18';
import { calculateExpr, part1, calculateExpr2, part2 } from './day18-2';

describe('Day 18: ', () => {
  it.only('test', async () => {
    assert.strictEqual(await shitMath('1 + 2 * 3 + 4 * 5 + 6'), 71);
  });
  it('test', async () => {
    assert.strictEqual(await calculateExpr('1 + (2 * 3) + (4 * (5 + 6))'), 51);
  });
  it('test', async () => {
    assert.strictEqual(await calculateExpr('2 * 3 + (4 * 5)'), 26);
  });
  it('test', async () => {
    assert.strictEqual(await calculateExpr('5 + (8 * 3 + 9 + 3 * 4 * 3)'), 437);
  });
  it('test', async () => {
    assert.strictEqual(await calculateExpr('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))'), 12240);
  });
  it('test', async () => {
    assert.strictEqual(await calculateExpr('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2'), 13632);
  });
  it('input', async () => {
    assert.strictEqual(await part1('day18/input.txt'), 6640667297513);
  });
  it('test 2', async () => {
    assert.strictEqual(await calculateExpr2('1 + 2 * 3 + 4 * 5 + 6'), 231);
  });
  it('test 2', async () => {
    assert.strictEqual(await calculateExpr2('1 + (2 * 3) + (4 * (5 + 6))'), 51);
  });
  it('test 2', async () => {
    assert.strictEqual(await calculateExpr2('2 * 3 + (4 * 5)'), 46);
  });
  it('test 2', async () => {
    assert.strictEqual(await calculateExpr2('5 + (8 * 3 + 9 + 3 * 4 * 3)'), 1445);
  });
  it('test 2', async () => {
    assert.strictEqual(await calculateExpr2('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))'), 669060);
  });
  it('test 2', async () => {
    assert.strictEqual(await calculateExpr2('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2'), 23340);
  });
  it('input', async () => {
    assert.strictEqual(await part2('day18/input.txt'), 451589894841552);
  });
});