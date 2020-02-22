"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
//object literal
// type Pizza = {
//   name: string, 
//   sizes: string[],
//   delivery: boolean,

// }

// let pizza: Pizza; 

// function createPizza ( name: string, sizes: string[], delivery: boolean)
// {
//   return {
//     name, 
//     sizes,
//     delivery
//   }
// }

// pizza = createPizza('Pepperni', ['small', 'medium'], true);


interface Pizza {
  name: string, 
  sizes: string[],

}

interface Pizza {
    delivery: boolean,
}

let pizza: Pizza; 

function createPizza ( name: string, sizes: string[], delivery: boolean)
{
  return {
    name, 
    sizes,
    delivery
  }
}

pizza = createPizza('Pepperni', ['small', 'medium'], true);