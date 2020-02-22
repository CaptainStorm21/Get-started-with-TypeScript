//template string 

var container = document.getElementById('container');


var array = [
"Pick up",
"Throw",
"Recycle"
];

for (var index in array) {
var value = array[index];
console.log(`${index}: ${value}`);
}
