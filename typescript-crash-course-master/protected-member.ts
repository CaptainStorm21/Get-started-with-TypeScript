"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code


///////////////////////////new way //////////////////////////////////////////////////////////
//protottype 
abstract class Sizes {
  constructor (protected sizes: string []){}

  set availSizes(sizes: string[]){
    this.sizes = sizes;
  }

  get availSizes(){
    return this.sizes;
  }
}


class Pizza extends Sizes {
  public toppings: string[] = [];
  constructor (readonly name: string,
               public sizes: string[]){
    super(sizes);
  }
  public addTopping(topping: string){
    this.toppings.push(topping);
  }

  public updateSized(sizes: string[]){
    this.sizes = sizes;
  }
}

const pizza = new Pizza ('Pepperoni', ['small', 'medium']);
pizza.addTopping('pepperoni')


console.log(pizza.availSizes)
pizza.updateSized(['largeest'])
console.log(pizza.availSizes)