const assert = require('assert');

import {playMemoryGame } from './day15';

describe('Day 15: ', () => {
  it('test', async () => {
    assert.strictEqual(await playMemoryGame('0,3,6', 2020), 436);
  });
  it('test', async () => {
    assert.strictEqual(await playMemoryGame('1,3,2', 2020), 1);
  });
  it('test', async () => {
    assert.strictEqual(await playMemoryGame('2,1,3', 2020), 10);
  });
  it('test', async () => {
    assert.strictEqual(await playMemoryGame('1,2,3', 2020), 27);
  });
  it('test', async () => {
    assert.strictEqual(await playMemoryGame('2,3,1', 2020), 78);
  });
  it('test', async () => {
    assert.strictEqual(await playMemoryGame('3,2,1', 2020), 438);
  });
  it('test', async () => {
    assert.strictEqual(await playMemoryGame('3,1,2', 2020), 1836);
  });
  it('input', async () => {
    assert.strictEqual(await playMemoryGame('12,1,16,3,11,0', 2020), 1696);
  });
  it('input', async () => {
    assert.strictEqual(await playMemoryGame('12,1,16,3,11,0', 30000000), 37385);
  });
});