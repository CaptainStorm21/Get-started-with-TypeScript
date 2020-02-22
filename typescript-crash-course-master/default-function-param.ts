// Import stylesheets
import "./style.css";

// Write TypeScript code
//default function param 

function multiply (a, b){
  return a * b;
}

console.log(multiply(5,23));

function multiply1 ( a, b = 25){
  return a * b;
}
console.log(multiply1(2));
console.log(multiply1(2, 100));

