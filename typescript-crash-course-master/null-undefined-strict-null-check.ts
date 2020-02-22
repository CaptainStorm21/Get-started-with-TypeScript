"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
let coupon: string |  null = 'pizza 23';

function removeCoupon(): void{
  coupon = null;
}

// pizza 23
console.log(coupon);
//null
removeCoupon();
//output
console.log('this is coupon ' + coupon);