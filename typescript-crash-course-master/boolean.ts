"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
const pizzas : number = 12;

function offerDiscount (orders: number): boolean {
  return orders >= 4;
}

if (offerDiscount(pizzas)){
  console.log('you are getting a discount')

} else {
  console.log (` you are not getting a discount`)
}

