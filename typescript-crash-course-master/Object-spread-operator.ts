// Import stylesheets
import "./style.css";

// Write TypeScript code
const pizza = {
  name: 'Vegan Pizza',
};

const toppings = [ 'pepperoni', 'tomato', 'garlic', 'anchovies']

const newOrder = {
  ...pizza,
  toppings,
}

console.log(newOrder)