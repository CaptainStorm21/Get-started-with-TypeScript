
// Import stylesheets
import "./style.css";

// Write TypeScript code
const coupon: string = 'pizza34';

function normalizeCoupon (code: string) : string{
  return code.toLocaleUpperCase();
}

const couponMessage : string = `
  Coupon is ${normalizeCoupon(coupon)}
`

console.log(couponMessage)