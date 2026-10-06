/** Demonstrate all four operations using a shared shopping bill. */
import { add, subtract, multiply, divide } from './mylib.js';

const breadCost = multiply(2.50, 3);
const subtotal = add(breadCost, 4.50);
const total = subtract(subtotal, 2);
const perPerson = divide(total, 2);

// Format the displayed amounts without rounding inside the library.
console.log('Shared shopping bill');
console.log(`Three loaves: EUR ${breadCost.toFixed(2)}`);
console.log(`With other groceries: EUR ${subtotal.toFixed(2)}`);
console.log(`After a EUR 2.00 discount: EUR ${total.toFixed(2)}`);
console.log(`Split between two people: EUR ${perPerson.toFixed(2)}`);