const assert = require('assert');

import { bagsOptions, requiredBags } from './day7';

describe('Day 7: Bag Dillmea', () => {
  it('bag options test', async () => {
    assert.strictEqual(await bagsOptions('day7/test.txt', 'shiny_gold_bag'), 4);
  });

  it('bag options input', async () => {
    assert.strictEqual(await bagsOptions('day7/input.txt', 'shiny_gold_bag'), 179);
  });

  it('required bags test', async () => {
    assert.strictEqual(await requiredBags('day7/test.txt', 'shiny_gold_bag'), 32);
  });

  it('required bags test 2', async () => {
    assert.strictEqual(await requiredBags('day7/test2.txt', 'shiny_gold_bag'), 126);
  });

  it('required bags input', async () => {
    assert.strictEqual(await requiredBags('day7/input.txt', 'shiny_gold_bag'), 18925);
  });
});