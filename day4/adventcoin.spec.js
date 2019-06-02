const assert = require('assert');

import { md5 } from "./adventcoin";

describe('AdventCoin test', () => {
  describe('test 1', () => {
    it('abcdef returns abcdef609043', () => {
      assert.equal(md5('abcdef', '00000'), 609043);
    }).timeout(10000);

    it('pqrstuv returns pqrstuv1048970', () => {
      assert.equal(md5('pqrstuv', '00000'), 1048970);
    }).timeout(10000);

    it('solves the problem', () => {
      assert.equal(md5('iwrupvqb', '00000'), 346386);
    }).timeout(10000);
  });

  describe('test 2', () => {
    it('solves the problem', () => {
      assert.equal(md5('iwrupvqb', '000000'), 9958218);
    }).timeout(100000);
  });
});