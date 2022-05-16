// Data Types

var myNumber;
myNumber = 111;
console.log(myNumber);

let myName = "Ismail";
let myLastName = "Bilge"

const x = 111;
console.log("x: ", x);

myNumber = 888;
//x = 999; // const can not change!

console.log(myNumber, x);

myNumber = "Henrry";  //its changable in JS that is both good and bad. that can be fixed.
console.log("myNumber: ", myNumber);

//----------------Bolean-------------------
//truthy and falsy exprssion in JS
let i = Boolean("hallo mein Freund");
let j = Boolean("");

console.log("i is aqual to: ", i);
console.log("j is aqual to: ", j);// for all type of data: for 0, NaN, null, undefined or empty it is false
//-----------------------------------------

console.log(typeof(myNumber));

//-------------OPERATORS-------------------
"use strict"

console.log("ab jetzt machen wir operators");
let numberFirst = 2;
let numberSecond = 7;
let result;

result = numberFirst + numberSecond;
result = numberFirst - numberSecond;
result = numberFirst * numberSecond;
result = numberFirst / numberSecond;
result = numberSecond % numberFirst;

result = numberFirst++;
result = ++numberFirst;
result = numberFirst--;
result = --numberFirst;

console.log("result :", result);

//-------assignment--------
let a = 3;
let b = 4;
let nevValue;

nevValue = a += b;
nevValue = a -= b;
nevValue = a *= b;
nevValue = a /= b;
nevValue = b %= a;

console.log("nevValue: ", nevValue);

//--------comparison----------
const t = 5;

console.log(" (t == 8): ", (t == 8));
console.log(" (t == 5): ", (t == 5));

console.log(" (t == '5'): ", (t == "5"));
console.log(" (t === '5'): ", (t === "5"));

//-----------logical------------
console.log("6 < 10 && 3> 1 :", 6 < 10 && 3> 1); //true and true
console.log("6 > 10 && 3> 1 :", 6 > 10 && 3> 1); //false and false
console.log("6 > 10 && 3< 1 :", 6 > 10 && 3< 1); //false and true
console.log("6 < 10 && 3< 1 :", 6 < 10 && 3< 1); //true and false

console.log("6 < 10 || 3> 1 :", 6 < 10 && 3> 1); //true or true
console.log("6 > 10 || 3> 1 :", 6 > 10 && 3> 1); //false or false
console.log("6 > 10 || 3< 1 :", 6 > 10 && 3< 1); //false or true
console.log("6 < 10 || 3< 1 :", 6 < 10 && 3< 1); //true or false

//---------Nullish-------------
//it checks 2 valuabeles. if the first one is undefines or null it returnsy second one.
console.log(null ?? "ismail bilge");
console.log(undefined ?? "ismail bilge");
console.log("henrry" ?? "daniel");
// for example; if i am not getting an input from form i want ti take it 0.
console.log(undefined ?? 0);

