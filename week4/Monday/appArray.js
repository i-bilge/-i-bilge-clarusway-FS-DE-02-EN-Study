let arrayColors = ["red","green","blue","grey"];
console.log(arrayColors);
console.log(arrayColors[0]);
console.log(arrayColors[arrayColors.length-1]);
//------------------Arrays are Objects------------------
let personInfo = {
    firstName: "Ismail",
    LastName: "Bilge",
    Age: 30
};

let personnel = [
    {
        fName: "Daniel",
        lName: "Alfaro",
        age: 32
    },
    {
        fName: "Hennry",
        lName: "Gomez",
        age: 33
    },
    personInfo,
    {
        city: "frankfurt",
        adress: {
            postCode: 1111,
            street: "dont know"
        }
    }
];
console.log(personnel);
console.log(personnel[1]);
console.log(personnel[1].fName);
console.log(personnel[2].firstName);
console.log(personnel[3].adress.street);
//---------------concat()------------------
let participants = ["ismail", "michael", "daniel", "hennry"];
console.log(participants);
//---------------sort()------------------
//do not sort numbers in array

//---------------push()------------------
participants.push("barry");
console.log(participants);
//---------------pop()------------------
participants.pop();
console.log(participants);
let poppedPart = participants.pop();
console.log(poppedPart);
console.log(participants);
//---------------shift() and unshift()------------------
participants.shift();
console.log(participants);
participants.unshift("Ali");
console.log(participants);
//---------------splice()------------------
console.log(participants);
participants.splice(2,1,"leyla","Cemil");
console.log(participants);
//---------------indexOf() and lastIndexOf()------------------
participants.push("Leyla");
console.log(participants.indexOf("Leyla", 3));



//-------HOMEWORK-----Sorting the Numbers-------
//0
function compareNumbers(a, b) {
    return a - b;
  }

  const numbers = [4, 2, 5, 1, 3];
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers);
  
  // [1, 2, 3, 4, 5]

  //1
  //a function takes 2 number. returns true if the 1st one bigger is. Otherwise false at least 2 solutions
function furstNumIsGreater(furstNum, secondNum)

  //2
  //find the reverse of a string. by using string methods(reverse() and join() methods with one of we have seen)


  //3
  //sort an array of numbers by using for loop
  let arrayForSort = [11,55,99,20,800,300,5,600,75];

  //+3 keep -1 at their exact positions(indexes)
  let arrayForSortPlus = [11,55,99,20,800,300,5,600,75,-1];