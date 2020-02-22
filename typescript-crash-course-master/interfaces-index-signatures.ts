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
    getAvailableSizes(): void;
    [key: number]: string; 
    //"1": string
}

type getAvailableSizes = () => string[];

let pizza: Pizza; 

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
pizza[1] = 'xyz';
console.log(pizza.toppings);

