// Import stylesheets
import "./style.css";

// Write TypeScript code
//object literal 

const pizza = {
  name: 'Pepperoni Heaven',
  price: 15,
  getName() {
    return this.name;
  }
  // getName : function (){
  //   return this.name;
  // }
}

const toppings = [
  'Pepperoni',
  'Garlic',
  'Bell Peppers'
]

const order = {
  pizza: pizza,
  toppings: toppings, 
  // pizza,
  // toppings,
}

console.log(order);

function createPizza (){
  return { pizza, toppings };
}

console.log(createPizza());
console.log("I ordered " + pizza.getName())