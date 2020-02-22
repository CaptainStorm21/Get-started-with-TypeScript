"use strict"

// Import stylesheets
import "./style.css";

// Write TypeScript code
function orderError (error: string) :never{
  throw new Error(error);
  //never going to return anything a value
}

orderError('something is wrong')