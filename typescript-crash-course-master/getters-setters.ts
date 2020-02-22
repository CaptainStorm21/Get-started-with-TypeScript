"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code


///////////////////////////new way //////////////////////////////////////////////////////////
class Sizes {
  constructor (public sizes: string[]){}
    set availSizes(sizes: string[]){
        this.sizes = sizes;
  }

  get availSizes() {
    return this.sizes; 
  }
}

const sizes = new Sizes([
  'small',
  'medium'
]);

console.log('//////')

//invoke the getter
console.log(sizes.availSizes);
//invoke a setter
sizes.availSizes = ['medium', 'xtra large'];

console.log(sizes.availSizes);

class RomanPizza {

  //declare as a type
  public toppings: string[] = [];

  constructor(readonly name: string){

  }
  public  addTopping(topping: string){
    this.toppings.push(topping);
  }
}

const italianPizza = new RomanPizza ('blazing pizza');
italianPizza.addTopping('Mango')
console.log(italianPizza)



console.log('my favorite pizza is ' + italianPizza.name);

