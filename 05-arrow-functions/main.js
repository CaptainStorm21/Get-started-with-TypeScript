//old es5 way
var logging = function (message) {
    console.log(message);
};
console.log(logging);
//es6 or lambda expression
var doLogging = function (message) { return console.log(message); };
console.log(doLogging);
