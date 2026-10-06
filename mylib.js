/**
 * Basic arithmetic for JavaScript numbers.
 * Callers supply finite numbers; results are not rounded.
 */

/**
 * Add two numbers.
 * @param {number} a - First value.
 * @param {number} b - Second value.
 * @returns {number} The sum.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtract the second number from the first.
 * @param {number} a - Starting value.
 * @param {number} b - Amount to subtract.
 * @returns {number} The difference.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers.
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} The product.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divide a number by a nonzero divisor.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} The quotient.
 * @throws {RangeError} When the divisor is 0 or -0.
 */
export function divide(a, b) {
  // Reject zero explicitly instead of returning Infinity or NaN.
  if (b === 0) {
    throw new RangeError('Cannot divide by zero.');
  }

  return a / b;
}