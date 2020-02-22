
const pizza = {
  name: 'favorite pizza',
  toppings: [ 'pepperoni', 'tomato', 'garlic', 'anchovies'],
  size: ['large', 'small', 'medium']
};

function order({name: pizzaName, toppings: pizzaToppings})
{
  console.log(pizzaName, pizzaToppings);
  return { pizzaName, pizzaToppings}
}

order(pizza);

const myOrder = order(pizza);

const { pizzaName } = order(pizza);

////////destructure an array
const   toppings1 = [ 'flat dough', 'tomato', 'garlic', 'anchovies'];

const [first, second, third] = toppings1;
console.log(first, second, third);

//////////////an array
function logToppings ([first]: any){
  console.log(first);
}

logToppings(toppings1);