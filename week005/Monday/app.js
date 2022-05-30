// console.log("hello from app.js");

// homework: please learn the difference between reference and primitive data types in js.

// const person = {
//     firstName: "Hennry",
//     lastName: "Gomez",
//     height: 175,
//     age: 24,
//     employed: false,
//     222: "just for test purposes",
//     skills: ["js", "html", "css", 555, false],
//     address: {
//         city: "Frankfurt",
//         district:"whatever...",
//         postalcode: [11111, 2222, 3333]
//     }
// }

// console.log(person);

// const emptyObject = {};
// console.log(emptyObject);

// accessing object's properties:
// console.log("person.lastName: ", person.lastName);
// console.log("person[\"lastName\"]: ", person["lastName"]);
// console.log("person['lastName']: ", person['lastName']);
// console.log("person: ", person);
// console.log("person.skills: ", person.skills);
// console.log("person.skills[2]: ", person.skills[2]);

// console.log(person.address.postalcode[2]);

// const student = {
//     "first name": "Daniel",
//     lastName: "Alfaro",
//     666: "a key as a number",
// }

// // console.log(student);

// student.bootcamp = "Clarusway";

// student["skills"] = {
//     softSkills: ["a", "b", "c"],
//     other: 5555
// }



// // console.log(student);

// console.log(student["lastName"]);

// student.lastName = "bilge";
// console.log(student["lastName"]);



// METHODS

// let dog = {
//     nameOf: "Rocky",
//     legs: 4,
//     tail: 1,
//     qualities: ["loyalty", "comanionship"],

//     bark: function() {
//         console.log("wooooffff...");
//     },

//     bark2: () => {
//         return "just for testing...";
//     },

//     result: function() {
//         return this.nameOf + " has " + this.legs + " legs...";
//     }
// }


// // console.log(dog);

// // dog.bark();

// // console.log("see: ", dog.bark());
// // console.log("see: ", dog.bark2());

// console.log(dog.result());



// DESTRUCTURING


// OBJECT DESTRUCTURING

// const note = {
//     id: 1,
//     title: "my first note.",
//     date: "01/01/1970"
// }


// // console.log(note);
// // console.log(note.id);
// // console.log(note.title);
// // console.log(note.date);

// const myId = note.id;
// const myTitle = note.title;
// const myDate = note.date;

// console.log(myId, myTitle, myDate);

// const { id, title, date} = note;
// console.log(id, title, date);



// const person = {
//     firstName: "Hennry",
//     lastName: "Gomez",
//     height: 175,
//     age: 24,
//     employed: false,
//     222: "just for test purposes",
//     skills: ["js", "html", "css", 555, false],
//     address: {
//         city: "Frankfurt",
//         district:"whatever...",
//         postalcode: [11111, 2222, 3333]
//     }
// }

// const { firstName, lastName, address} = person;


// console.log(firstName, lastName, address);


// ARRAY DESTRUCTURING

// const date = [1970, 4, 20];



// console.log(date[0]);
// console.log(date[1]);
// console.log(date[2]);

// year = date[0];
// month = date[1];
// day = date[2];

// console.log(year, month, day);


// const [year, month, day] = date;

// console.log(year, month, day);



// const foo = ["one", "two", "three"];

// const [red, yellow, green] = foo;

// console.log(red, yellow, green);



// SWAPPING VALUES


// let a = 1;
// let b = 3;

// let tempA = a;
// a = b;
// b = tempA;

// [a, b] = [b, a];

// console.log("a: ", a, "   b: ", b);



// SPREAD OPERATOR


// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = [...numbers];

// // const newNumbers = numbers;

// console.log(numbers, newNumbers);


// numbers.push(55, 77, 99);

// console.log(numbers, newNumbers);


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, 11, ...arr2, 7, 8, 9];

// console.log(arr3);


const person = {
    firstName: "Barry",
    age: 44
}

// console.log(person);


const newPerson = {
    ...person,
    city: "new york",
    age: 33
}


console.log(newPerson);

//Hands on for sort 

let arrayToSort = [20, 15, 80, -1, -1, -1, 150, 50, 600, -1, 200, 100, 300, -1, 30];





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