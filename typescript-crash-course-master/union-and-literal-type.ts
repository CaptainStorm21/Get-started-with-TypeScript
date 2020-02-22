"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
let pizzaSize : string = 'small';

function selectSize( size: 'small' | 'medium' | 'large'): void {
  pizzaSize = size;
}

selectSize('mediumness');
selectSize('medium');

console.log(`Pizza size: ${pizzaSize}`);


//union type
let pizzaSizeNum : number = 1;

function selectSizeNum( size: 1 | 2 | 3): void {
  pizzaSizeNum = size;
}

selectSizeNum(10);
selectSizeNum(1);

console.log(`Pizza size: ${pizzaSizeNum}`);