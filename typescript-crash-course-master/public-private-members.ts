"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code


///////////////////////////new way //////////////////////////////////////////////////////////
class RomanPizza {

  //declare as a type
  public toppings: string[] = [];

  constructor(private name: string){

  }
  public  addTopping(topping: string){
    this.toppings.push(topping);
  }
}

const italianPizza = new RomanPizza ('blazing pizza');
italianPizza.name;
italianPizza.addTopping('Mango')
console.log(italianPizza)



