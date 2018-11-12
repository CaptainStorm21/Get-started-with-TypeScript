//this will run

function doSomething() {
    for (var i = 0; i< 5; i++){
        console.log(i);
    }
    //cannot find i because i is block scope let i 
    console.log("This will run " + i);
}

doSomething();

/*

//error comppilaton because of let vs var

function doSomething() {
    for (let i = 0; i< 5; i++){
        console.log(i);
    }
    //cannot find i because i is block scope let i 
    console.log("This will not run " + i);
}

doSomething();


*/