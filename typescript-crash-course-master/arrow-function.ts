// Import stylesheets
import "./style.css";

// Write TypeScript code
const pizzas = [
  {
    name: "pepperoni",
    toppings: ["bell peppers", "mushrooms", "garlic"]
  }
];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
  name: "Blazing",
  getName: function() {
    console.log(this);
  },
  getName2: function() {
    setTimeout(function() {
      console.log(this);
    }, 100);
  },
  getName3: function() {
    const self = this;
    setTimeout(function() {
      console.log(self);
    }, 100);
  },
//   //arrow function ignores the scopes
//   //doesnt bind "this" value
  getName4: function() {
    setTimeout(() => {
      console.log(this);
      console.log(this.name);
    }, 100);
  },
};

console.log(pizza.getName());
console.log(pizza.getName2());
console.log(pizza.getName3());
console.log(pizza.getName4());

const pizza1 = {
  name: 'Blazing Pizza Heaven',
  getName: ()=> pizza1.name,
}
console.log(pizza1.getName());


const pizza2 = {
  name: 'Heaven Pizza',
  getName: function() {
    console.log(this.name);
  },
};
console.log(pizza2.getName());