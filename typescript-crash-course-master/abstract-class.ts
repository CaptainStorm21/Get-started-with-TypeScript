"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code


///////////////////////////new way //////////////////////////////////////////////////////////
//protottype 
export abstract class Sizes {
  constructor (public sizes: string []){}

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
}

const pizza = new Pizza ('Pepperoni', ['small', 'medium']);
pizza.addTopping('pepperoni')

console.log(pizza.availSizes)