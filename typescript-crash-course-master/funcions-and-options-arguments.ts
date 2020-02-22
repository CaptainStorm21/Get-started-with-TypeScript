"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
let sumOrder : (price: number, quantity?: number) => number;

sumOrder = (x, y) => {
  if (y){ return x * y };
  return x;
}

const sum = sumOrder(23);

console.log(`Total sum is ${sum}`)

const sums = sumOrder (25, 2);
console.log(`Total sums is ${sums}`)