var container = document.getElementById('container');
function countdown (initial, final, interval){
var current = initial;
while (current > final) {
container.innerHTML = current;
current -= interval;
}
}
countdown( 4, 0, 8);


//default values
var container = document.getElementById('container');
function countdown (initial, final = 0, interval = 1){
var current = initial;
while (current > final) {
container.innerHTML = current;
current -= interval;
}
}
countdown( 4, 0, 8)
