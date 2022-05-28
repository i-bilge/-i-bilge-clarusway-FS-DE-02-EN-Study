// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;

// const calculate = (a, b, callback) => {
//   const result = callback(a, b);
//   console.log('RESULT: ', result);
// };

// calculate(10, 5, sum);
// calculate(10, 5, sub);

//--------------------------------------------------------------------------------
// forEach

// const arr1 = [5, 6, 7, 2, 3];
// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
// }
// console.log(sum);
// sum = 0;

// arr1.forEach((item, i) => {
//   sum += item;
//   console.log('index', i, 'current sum', sum);
// });
// console.log(sum);

// sum = 0;
// const addToSum = (item) => (sum += item);
// arr1.forEach(addToSum);
// console.log(sum);

// example-2
// const payments = [100, 200, -250, 500, -300, 1000];
// payments.forEach((item) =>
//   item > 0
//     ? console.log(`You recieved ${item}`)
//     : console.log(`You paid ${item}`)
// );

//--------------------------------------------------------------------------------
// map

// const arr1 = [1, 4, 9, 16];
// const map1 = arr1.map(function (item) {
//   return item * 2;
// });

// console.log(arr1, map1);

// const names = ['Barry', 'Henry', 'Daniel', 'Ismail'];
// const upper = names.map((item) => item.toUpperCase());
// console.log(upper);

// const str = 'Clarusway Online Career IT Training School';
// const firstLetters = str
//   .split(' ')
//   .map((item) => item[0])
//   .join();
// console.log(firstLetters);

//----------------------Conditioning in Map--------------------------------------
// const payments = [100, 200, -250, 500, -300, 1000];
// let payments;
// if (payments) {
//   const text = payments.map((item) =>
//     item > 0 ? `You recieved ${item}` : `You paid ${item}`
//   );
//   console.log(text);
// }

// const text =
//   payments &&
//   payments.map((item) =>
//     item > 0 ? `You recieved ${item}` : `You paid ${item}`
//   );

// console.log(text);

// optional chaining
// const text = payments?.map((item) =>
//   item > 0 ? `You recieved ${item}` : `You paid ${item}`
// );

//--------------------------------------------------------------------------------
//filter

// console.log(text);
// const payments = [100, 200, -250, 500, -300, 1000];
// const income = payments
//   .filter((item) => item > 0)
//   .map((item) => (item * 1.1).toFixed(2));
// console.log(income);

// const names = ['Barry', 'Henry', 'Daniel', 'Ismail', 'Brian'];
// const findB = names.filter((item) => item[0] == 'B');
// console.log(findB);

//--------------------------------------------------------------------------------
// reduce

// const payments = [100, 200, -250, 500, -300, 1000];
// // const balance = payments.reduce(
// //   (acc, item) => (item > 0 ? acc + item : acc),
// //   0
// // );
// // console.log(balance);

// const incomePayment = payments.reduce(
//   (acc, item) => {
//     if (item > 0) acc[0].push(item);
//     else acc[1].push(item);

//     return acc;
//   },
//   [[], []]
// );
// console.log(incomePayment);

//--------------------------------------------------------------------------------
// spread

// let a = 10;
// let b = a;
// b = 15;
// console.log(a, b);

// const arr1 = [1, 2, 3, 4];
// const arr2 = arr1;
// arr2[0] = 9;
// console.log(arr2);
// console.log(arr1);

// const arr3 = arr1.map((item) => item);
// arr3[0] = 5;
// console.log(arr3, arr1);

// const arr4 = [1, arr1, 5, 6, ...arr2];
// arr4[0] = 4;
// console.log(arr4, arr1);

// const sum = (a, b) => a + b;
// const sumAll = (...data) => {
//   return data.reduce((acc, item) => acc + item, 0);
// };

// console.log(sumAll(1, 2, 3, 4, 5, 6, 7));

// console.log(Math.max(3, 6, 9, 11, 2, 4, 5));
// const numbers = [3, 6, 9, 11, 2, 4, 5];
// console.log(Math.max(...numbers));

// const names = ['Barry', 'Henry', 'Daniel', 'Ismail', 'Brian'];
// const person1 = names[0];
// const person2 = names[1];

//--------------------------------------------------------------------------------
// destructuring arrays

// const [name1, , name2, ...rest] = names;
// console.log(name1, name2, rest);

// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

const str1 = 'The Quick Brown Fox';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(
  str1
    .split('')
    .map((item) =>
      UPPER.indexOf(item) !== -1 ? item.toLowerCase() : item.toUpperCase()
    )
    .join('')
);



// const str2 = 'The Quick Brown Fox';
// let newStr = '';
// str2.split("");
  
//   str2.forEach((item) => 
//     item === item.toUpperCase()
//       ? newStr += item.toLowerCase()
//       : newStr += item.toUpperCase()
//   );
  
// console.log(newStr);

function swap(str) {
  str = str.toString();
  let newStr = '';
  
  for(let i = 0; i < str.length; i++){
  if(str[i] === str[i].toUpperCase()){
  newStr += str[i].toLowerCase();
  }else{
  newStr += str[i].toUpperCase();
  
  }
  }
  return newStr;
  }
  
  console.log(swap('The Quick Brown Fox'));


  const swapCases = ([...str]) => str.reduce((acc, cur) => {
    cur.toUpperCase() === cur ? (acc += cur.toLowerCase()) : (acc += cur.toUpperCase());
    return acc;
}, "");
console.log(swapCases('The Quick Brown Fox'));


