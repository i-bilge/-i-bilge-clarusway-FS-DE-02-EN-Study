//1
  //a function takes 2 number. returns true if the 1st one is bigger. Otherwise false at least 2 solutions
let num1 = 2;
let num2 = 1;

function firstNumIsGreater1(firstNum, secondNum){
   if (firstNum > secondNum) {
       return true;
   }
   else 
       return false;
}

function firstNumIsGreater2(firstNum, secondNum) {
    return (firstNum>secondNum ? true : false);
}

firstNumIsGreater3 = (firstNum, secondNum) => {
    if (firstNum > secondNum) {
        return true;
    }
    else 
        return false;
 }

console.log("solution with if statemen: ", firstNumIsGreater1(num1, num2));
console.log("solution with ternary operator: ", firstNumIsGreater2(num1, num2));
console.log("solution with arrow: ", firstNumIsGreater3(num1, num2));
//-------------------------------------------------------------------------------
//2
  //find the reverse of a string. by using string methods(reverse() and join() methods with one of we have seen)
  let Text = "Tamara"

  function reverse(s) {
      return s.split('').reverse().join('');
    }
    console.log("text is :", Text);
    console.log(reverse(Text));
//-------------------------------------------------------------------------------
//3
  //sort an array of numbers by using for loop
  let arrayForSort = [11,55,99,20,800,300,5,600,75];
  let sortedArray = [];
  let baseNumber = 10000000000000000000000000;
 
  for (let i = 0; i < arrayForSort.length; i++) {
  for (let j = 0; j < arrayForSort.length; j++) {
      if (arrayForSort[j] < baseNumber){
          baseNumber = arrayForSort[j];
      } else continue;
    }
    sortedArray[i] = baseNumber;   
    arrayForSort.splice(arrayForSort.indexOf(baseNumber), 1, 10000000000000000000000000);
    baseNumber = 10000000000000000000000000;
    }
    
console.log(sortedArray);



let arrayForSort3 = [11,55,99,20,800,300,5,600,75];
arrayForSort3.sort(function(a, b) {
    return a - b;
  });
  
  console.log("arrar sorting solution 3 (short solution)",arrayForSort3);




// //+3 keep -1 at their exact positions(indexes)
//   let arrayForSortPlus = [11,55,99,20,800,300,5,600,75,-1];
function findMinusOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == -1) {
            return i;
        }
    }
}

let arrayForSort2 = [11,55,99,20,800,-1,300,5,600,75];
let sortedArray2 = [];
let baseNumber2 = 10000000000000000000000000;
const indexOfMinus = findMinusOne(arrayForSort2);


for (let i = 0; i < arrayForSort2.length; i++) {
for (let j = 0; j < arrayForSort2.length; j++) {
    if(arrayForSort2[j] == -1){
        continue;
    }
    else if(arrayForSort2[j] < baseNumber2){
        baseNumber2 = arrayForSort2[j];
    } 
    else continue;
  }
  sortedArray2[i] = baseNumber2;   
  arrayForSort2.splice(arrayForSort2.indexOf(baseNumber2), 1, 10000000000000000000000000);
  baseNumber2 = 10000000000000000000000000; 
  }
  
sortedArray2.splice(indexOfMinus, 0, -1);  
console.log(indexOfMinus);
console.log(sortedArray2);