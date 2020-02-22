"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
let sumOrder = (price: number, quantity: number): number => {
  return price * quantity;
}

const sum = sumOrder(30, 2);
console.log(sum)

//////////////////////////////

let sumOrders : (price: number, quantity: number) => number;

sumOrders = ( x, y) => {
  return x * y;
}

const sums = sumOrder( 34, 12);

console.log(`total sum is ${sums}`)