"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
let pizza: { name: string; price: number; getName(): string} = {
  name: 'Napoleon Pizza',
  price: 34,
  getName() {
    return pizza.name;
  }
}

console.log(pizza.getName());
console.log(pizza.name)