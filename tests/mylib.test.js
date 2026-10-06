/** Test the library directly without running main.js. */
import { expect } from 'chai';
import { before, after, describe, it } from 'mocha';
import { add, subtract, multiply, divide } from '../mylib.js';

describe('mylib', function () {
  // No shared resources are needed; these hooks mark the suite lifecycle.
  before(function () {
    console.log('Starting arithmetic tests.');
  });

  after(function () {
    console.log('Finished arithmetic tests.');
  });

  describe('add', function () {
    it('combines two grocery costs', function () {
      expect(add(7.50, 4.50)).to.equal(12);
    });

    it('adds a negative adjustment', function () {
      expect(add(12, -2)).to.equal(10);
    });

    it('adds decimals within a small rounding tolerance', function () {
      expect(add(0.1, 0.2)).to.be.closeTo(0.3, 1e-12);
    });
  });

  describe('subtract', function () {
    it('deducts a discount from the subtotal', function () {
      expect(subtract(12, 2)).to.equal(10);
    });

    it('keeps a negative result when the deduction is larger', function () {
      expect(subtract(2, 5)).to.equal(-3);
    });
  });

  describe('multiply', function () {
    it('calculates the cost of three loaves', function () {
      expect(multiply(2.50, 3)).to.equal(7.50);
    });

    it('returns zero for zero quantity', function () {
      expect(multiply(2.50, 0)).to.equal(0);
    });

    it('preserves the sign of a negative factor', function () {
      expect(multiply(-3, 4)).to.equal(-12);
    });
  });

  describe('divide', function () {
    it('splits a bill equally between two people', function () {
      expect(divide(10, 2)).to.equal(5);
    });

    it('divides by a negative number', function () {
      expect(divide(9, -2)).to.equal(-4.5);
    });

    it('allows a zero dividend when the divisor is nonzero', function () {
      expect(divide(0, 4)).to.equal(0);
    });

    it('throws when a bill is split between zero people', function () {
      // Chai calls this function and checks the error it throws.
      expect(() => divide(10, 0))
        .to.throw(RangeError, 'Cannot divide by zero.');
    });

    it('also rejects negative zero as a divisor', function () {
      expect(() => divide(10, -0))
        .to.throw(RangeError, 'Cannot divide by zero.');
    });

    it('rejects zero divided by zero', function () {
      expect(() => divide(0, 0))
        .to.throw(RangeError, 'Cannot divide by zero.');
    });
  });
});