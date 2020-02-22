//scoping
//var const let

function f(shouldIni: Boolean){
  if(shouldIni){
    var x = 10;
    console.log("inside " + x)
  } 

  return x
}

console.log(f(true));
// console.log(f(false))



function f1(shouldIni: Boolean){
  if(shouldIni){
    let x = 40;
    console.log("inside " + x)
  }3

  return x
}

console.log(f1(true));
console.log(f1(false))



function f3(shouldIni: Boolean){
  let x: number;
  if(shouldIni){
    x = 40;
  } 

  return x
}

console.log(f3(true));
console.log(f3(false))

-------------------------------------------
const 
const MYNAME: string = "CHARLES DARWIN";

console.log(MYNAME);

