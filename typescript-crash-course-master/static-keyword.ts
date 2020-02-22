"use strict";

// Import stylesheets
import "./style.css";
ApplicationCache;
// Write TypeScript code
const date = new Date();
console.log(date);

const date1 = Date.now();
console.log(date1);

class Coupon {
  static allowed = ["pepperoni pizza", "tomato pizza"];
  static create(percentage: number) {
    return `Pizza_rest_${percentage}`;
  }
}

console.log(Coupon.allowed);

console.log(Coupon.create(34));
