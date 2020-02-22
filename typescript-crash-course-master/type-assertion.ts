"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
type Size =  'small' | 'medium' | 'large';
type Callback = ( size: Size ) => void;

let pizzaSize = 'xsmall'


const selectSize: Callback = ( x ) =>{
  pizzaSize = x; 
}

selectSize('medium');


