var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
//enums
var colorRed = 0;
var colorBlue = 1;
var colorWhite = 2;
var colorGreen = 3;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["White"] = 2] = "White";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
console.log(backgroundColor);
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
