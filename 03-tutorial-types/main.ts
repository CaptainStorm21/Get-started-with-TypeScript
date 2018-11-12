
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];


//enums
const colorRed = 0;
const colorBlue = 1;
const colorWhite = 2;
const colorGreen = 3;

enum Color{ Red, Blue, White, Green};
let backgroundColor = Color.Blue;
console.log(backgroundColor);
//output blue is index 1 






//----------------------------------------------------Examples---------------------------------------------- //
//assign a type to a variable
//let a: number;

//works no problems
//a = 90;

//does not work
//a = "alpha";

//does work because NaN is a number
//a = NaN;


/*
//ts sees this as any type
let a;
*/

/*
//typescript will compile this but reassigned count will give you an underline 
//because let count and count are different types of variables
let count = 90;
count = "a";
*/
