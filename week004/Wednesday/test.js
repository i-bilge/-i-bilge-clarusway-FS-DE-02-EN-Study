let names =["Chase","Barry", "Ismaill", "Henrry", "Daniel"]
let numbers = [1,78,42,2,5]

// Push adds to the end
// Pop removes from the end
// Shift removes from the front
// Unshift adds to the front

// Push adds a new value to an array, at the end
names.push("Jimmy")
// pop will return the value that it removes from the array while removing the array
let removedName = (names.pop());
console.log(removedName)

// Unshift adds a value to the beginning of an array:
numbers.unshift(90)
console.log(numbers)
// Shift removes the first value from the front of the array:
let removedNumber = (numbers.shift())
console.log(removedNumber)


// Important later!
// Sort numbers from least to greatest:
// https://www.w3schools.com/jsref/jsref_sort.asp
numbers.sort(function(a, b){return a-b})
console.log(numbers)

let concat = names.concat(numbers)
console.log(concat)
// The sort method will sort our array alphabetically:
console.log(names.sort())

// console.log(names)
// console.log(numbers)

// Arrays start at index 0:  array[0]
// console.log(names[2])
// console.log(numbers[3])

// To access a value in an array, we type the name of the array and an index for the value:
let name1 = names[0]
console.log(name1)

// Reassigning values in arrays:
names[0]="Not Chase"
console.log(names[0])
console.log(names)

console.log(names.reverse())

// Arrays have properties and methods
console.log(names.length)

// Important later:
// iterating through an array using a for loop:
// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

// Splice example:
let names2 = ["Ismaill", "Henrry", "Daniel", "Chase", "Barry"]
console.log(names2)
// First value passed to splice is the position of where to start deleting values
// Second value passed to splice method tells us how many items to remove from our starting index
// Following values will be inserted into our array
names2.splice(1,3, "James", "Jimmy", "fred", "frank", "steve")
console.log(names2)

let steveIndex = names2.indexOf("steve") // >> 5
console.log(steveIndex)
// removing steve from the array with splice:
names2.splice(steveIndex,1)
console.log(names2)

// Slice will not modify the original array (unlike some other array methods)
// Slice will return a new array
// First value passed to slice will determine the starting point
// Second value tells the slice where to stop (this index will not be included in the new array)

// This will return indexes 1 and 2 in a new array
let names3 = names2.slice(1,3) // >> names2[1], names2[2]
console.log(names3)

let numbersArray = [1,2,1,2,3,3,4,5,6,7,1,7,4,1]
// Below will return true if the value is in the array or false if the value is not in the array:
console.log(numbersArray.includes(7))
// IndexOf method will return the first index of a value in an array:
// console.log(numbersArray.indexOf(1))

// LastIndexOf method will return the last index of a value in an array:
// console.log(numbersArray.lastIndexOf(1))

// if we have an invalid index in our array, it will return the index of -1
// console.log(numbersArray.indexOf(493))

let sentence = "My name is Chase and I have typed this sentence"
sentenceArray = sentence.split(" ")
// console.log(sentenceArray)
// console.log(sentenceArray.join("."))

// Map:
let newSentenceArray = sentenceArray.map(
        (a)=>a.toUpperCase()
    )
console.log(newSentenceArray)

// Filter
let nums = [1,2,3,4,5,6,7,8,9,10]
console.log(
    nums.filter(
        // Whatever returns true here will be passed to a new array
            (num) => num % 2 === 0
        )
    )


// for loop to add a sum of all values
// let total = 0;
// for(let i = 0; i < nums.length; i++){
//     total += nums[i]
// }
// console.log(total)

// Reduce Method:
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// console.log(nums.reduce((sum,num)=>sum+num))

console.log(nums.reduce((acc, cur, curI, arr)=>acc+cur))

// Fibonacci using array.reduce:

function fib(n){
    return new Array(n).fill(1).reduce((arr, _ ,i) => {
        arr.push((i <= 1) ? i : arr[i-2] + arr[i-1])
        return arr
    },[]) ;
  }
  console.log(fib(10))

  console.log("END OF FIB")

// let first = ()=>console.log("first")
// let second = ()=>console.log("second")

// first()
// second()

// function first(){
//     // Simulate a code delay
//     setTimeout( function(){
//       console.log(1);
//     }, 500 );
//   }
  
//   function second(){
//     console.log(2);
//   }
  
//   first();
//   second();

// CALLBACK EXAMPLE:
// function doHomework(subject) {
//     console.log(`Starting my ${subject} homework.`);
//   }
//   doHomework('math');


function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }
  
  function alertFinished(){
    console.log('Finished my homework');
  }
  
  doHomework('math', alertFinished);

  let twoDimensional = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
  ]

  let threeDimensional = [
      [
          [1,2,3],[4,5,6],[7,8,9]
      ],
      [
          [10,11,12],[13,14,15],[16,17,18]
      ],
      [
          [19,20,21],[22,23,24],[25,26,27]
      ]
  ]

  console.log(twoDimensional[0][2])
  console.log(threeDimensional[0][0][1])

  
  console.log("----------------------------------")
  console.log("-----LOOPING THROUGH 3D ARRAY-----")

  for(let i = 0; i < threeDimensional.length; i++){
      for(let j = 0; j < threeDimensional[i].length; j++){
          for(let k = 0; k < threeDimensional[i][j].length; k++){
              console.log(threeDimensional[i][j][k])
          }
      }
  }