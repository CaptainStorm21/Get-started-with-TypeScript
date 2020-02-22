var container = document.getElementById('container');

function countdown (initial, final, interval){

var current = initial;
while(current > final) {
container.innerHTML = current;
current -=interval;
}
}

countdown( 10, 9, 20);

//output 10




////////////////////////
var container = document.getElementById('container');

function countdown (initial, final = 0 , interval = 1 ){

var current = initial;
while(current > final) {
container.innerHTML = current;
current -=interval;
}
}

countdown( 10);
//output 1
