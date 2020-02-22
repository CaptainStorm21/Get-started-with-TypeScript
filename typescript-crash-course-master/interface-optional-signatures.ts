"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
interface Pizza {
  name: string;

}

interface Sizes{
  sizes: string[];
}

interface Pizza extends Sizes {
    toppings?: number;
    getAvailableSizes(): string[];
}

type getAvailableSizes = () => string[];

let pizza: Pizza; 
// function createPizza ( name: string, sizes: string[], delivery: boolean)
// {
//   return {
//     name, 
//     sizes,
//     delivery,
//     getAvailableSizes() {
//       return this.sizes;
//     }
//   } as Pizza;
// }

function createPizza ( name: string, sizes: string[]): Pizza
{
  return {
    name, 
    sizes,
    getAvailableSizes() {
      return this.sizes;
    }
  }
}

pizza = createPizza('Pepperni', ['small', 'medium']);
pizza.toppings = 3; 

console.log(pizza.toppings)