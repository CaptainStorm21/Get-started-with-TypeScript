// Import stylesheets
import "./style.css";

// Write TypeScript code
const toppings = [
  'apple',
  'grape',
  'pear'
];

const newToppings = [
  'berry',
  'salmonberry',
  'rasberry',
]

const allToppings = [...toppings, ...newToppings]

console.log(allToppings);

