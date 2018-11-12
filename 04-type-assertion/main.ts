let message; 
message = 'abc!!!'; 
let ending = ( < string > message).endsWith("!"); 
console.log(ending); 
//true



let ending1 = (message as string).endsWith("!?"); 
console.log(ending1); 
//false