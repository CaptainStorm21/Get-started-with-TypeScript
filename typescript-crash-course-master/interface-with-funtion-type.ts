"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
interface Pizza {
  name: string;
  sizes: string[];
  getAvailableSizes(): string[];

}

interface Pizza {
    delivery: boolean,
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

function createPizza ( name: string, sizes: string[], delivery: boolean): Pizza
{
  return {
    name, 
    sizes,
    delivery,
    getAvailableSizes() {
      return this.sizes;
    }
  }
}

pizza = createPizza('Pepperni', ['small', 'medium'], true);