//declare a function
function log (message, language){
    console.log(message + language + "!");
}

//declare vars
var message = "Hello, This is ";
var language = "Typescript";

//call a function
log(message, language);

//go to terminal
//type tsc hello.ts --- this will convert into hello.js
//node hello.js