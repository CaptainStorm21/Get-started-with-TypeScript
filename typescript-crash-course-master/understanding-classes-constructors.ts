"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
///////////////////////////////////////////old way////////////////////////////////////////////
function Pizza (name: string)
{
  this.name = name; 
  this.toppings = [];
}

Pizza.prototype.addTopping = function addToppings(topping: string)
{
  this.toppings.push(topping);
};

const pizza = new Pizza ('Pepperni');
pizza.addTopping('pepperoni');

console.log(pizza);

///////////////////////////new way //////////////////////////////////////////////////////////
class RomanPizza {

  //declare as a type
  name: string;
  toppings: string[] = [];

  constructor(name: string){
    this.name = name; 
  }
  addTopping(topping: string){
    this.toppings.push(topping);
  }
}

const italianPizza = new RomanPizza ('blazing pizza');

italianPizza.addTopping('pepperoni');
console.log(italianPizza)
