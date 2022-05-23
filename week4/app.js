//JAVASCRIPTS STRINGS

//length property
let best = "Clarusway";
var myName = "Ismail";
const myLastName = "Bilge";
friends  = "daniel, ismail and hennry";// Js defines as default this with "var" keyword.
let emptyString = "";
let myFullName;

console.log("length of best: ", best.length);// we re not using() at the end of property, because it s not a method, it s property
console.log("length of emptyString: ", emptyString.length);
console.log("length of thisone: ".length);
//--------------concat-------------------
myFullName = myName.concat(" ",myLastName);
console.log("my full name: ", myFullName);
//--------------charAt()-------------------
console.log(myFullName.charAt(0)); //the 1st character of full name
console.log(myFullName.charAt(myFullName.length-1));// the last char.
//--------------includes()-------------------
console.log("iclude example: ", myFullName.includes("si"));
console.log("iclude example: ", myFullName.includes("mail"));
//--------------indexOf()-------------------
console.log(myFullName.indexOf("Bilge"));
console.log(myFullName.indexOf("bilge"));// we do not have that
console.log(myFullName.indexOf("i"));// we are getting the 1st occurance
//--------------replace()-------------------
// returns a new string
let text = "Hello my friends! Welcome to Home...";
let text2 = text.replace("Hello", "Hi");
console.log(text);
console.log(text);
//--------------search()-------------------
console.log(text.search("Home"));
//--------------slice()-------------------
// returns a new string
console.log(text.slice(9, 16));

let str = "al al al al al al ala";//to find the last 3 characters
console.log(str.slice((str.length-4), (str.length)));
//--------------split()-------------------
// returns array
console.log(str.split(" "));
//--------------substring()-------------------
console.log(text.substring(18, 25));
console.log(text.substring(25, 18));
//--------------toLower/UpperCase()-------------------
// returns a new string
let lowerText = text.toLowerCase();
console.log(lowerText);
let upperText = text.toUpperCase();

let textLocale = "öÖ üÜ iI sS";
console.log(textLocale.toLocaleLowerCase("tr"));
//--------------trime()-------------------
let aNewText = "           hello guys, Whats up?            ";
console.log(aNewText.trim());