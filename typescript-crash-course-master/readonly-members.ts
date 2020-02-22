"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code


///////////////////////////new way //////////////////////////////////////////////////////////
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

italianPizza.name = "Canadian flavor";
//error