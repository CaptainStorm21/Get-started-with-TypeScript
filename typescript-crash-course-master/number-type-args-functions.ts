
// Import stylesheets
import "./style.css";

// Write TypeScript code
let pizzaCost: number = 20;
const pizzaToppings : number = 4;

function calcPrice (cost: number, toppings: number): number {
  //: number guarantees return in number
  return cost + 1.5 * toppings;
}

const cost : number = calcPrice(pizzaCost, pizzaToppings);
console.log(`pizza cost ${cost}`)

const cost1 : number = calcPrice(100, pizzaToppings);
console.log(`pizza cost ${cost1}`)