const assert = require('assert');

import { fuel1, fuel2, totalFuel1, totalFuel2 } from "./fuel";

describe('Fuel test', () => {
  describe('fuel1', () => {
    it('mass of 12', () => {
      assert.equal(fuel1(12), 2);
    });

    it('mass of 14', () => {
      assert.equal(fuel1(14), 2);
    });

    it('mass of 1969', () => {
      assert.equal(fuel1(1969), 654);
    });

    it('mass of 100756', () => {
      assert.equal(fuel1(100756), 33583);
    });

    it('calculate mass of spacecraft', async () => {
      assert.equal(await totalFuel1('./day1/data.text'), 3452245);
    });
  });

  describe.only('fuel 2', () => {
    it('mass of 12', () => {
      assert.equal(fuel2(12), 2);
    });

    it('mass of 14', () => {
      assert.equal(fuel2(14), 2);
    });

    it('mass of 1969', () => {
      assert.equal(fuel2(1969), 966);
    });

    it('mass of 100756', () => {
      assert.equal(fuel2(100756), 50346);
    });

    it('calculate mass of spacecraft', async () => {
      assert.equal(await totalFuel2('./day1/data.text'), 5175499);
    });
  });
});