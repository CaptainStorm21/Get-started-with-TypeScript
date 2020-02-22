"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code

interface SizesInterface{
  //sizes: string[]; -- public sizes
  availSizes: string[];
}

///////////////////////////new way //////////////////////////////////////////////////////////
//protottype 
abstract class Sizes implements SizesInterface {
  constructor (protected sizes: string []){}

  set availSizes(sizes: string[]){
    this.sizes = sizes;
  }

  get availSizes(){
    return this.sizes;
  }
}

interface PizzaInterface extends SizesInterface{
  readonly name: string; 
  toppings: string[];
  updatedSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}

class Pizza extends Sizes implements PizzaInterface {
  public toppings: string[] = [];
  constructor (readonly name: string,
               public sizes: string[]){
    super(sizes);
  }
  public addTopping(topping: string){
    this.toppings.push(topping);
  }

  public updateSizes(sizes: string[]){
    this.sizes = sizes;
  }
}

const pizza = new Pizza ('Pepperoni', ['small', 'medium']);
pizza.addTopping('pepperoni')


console.log(pizza.availSizes)
pizza.updateSizes(['largeest'])
console.log(pizza.availSizes)