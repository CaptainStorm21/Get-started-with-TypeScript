// Import stylesheets
import "./style.css";

// Write TypeScript code
function sumAll(arr){
  return arr.reduce((prev, next) => prev + next)
}

const sum = sumAll([23, 34, 22, 11, 6556, 435]);
console.log(sum)

//indefinite number
function sumAllreduce(message, ...arr1){
  console.log(arguments);
  console.log(message);
  return arr1.reduce((prev, next) => prev + next)
}

const sumReduce = sumAllreduce("this is reduce", 23, 34, 22, 11, 6556, 435);
console.log(sumReduce)