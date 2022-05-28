const arr = [
    5,
    5,
    5,
    5,
    5
]
​
// callback function
function logger(accumulator, currentValue){
    return accumulator + currentValue
}
​
//without filter:
let acc
for(let i = 0; i < arr.length; i++){
    acc+= arr[i]
}
console.log(acc)
​
// Array reduce syntax example:
// arr.reduce(callback(accumulator, currentValue), initialValue)
​
​
// reduce() Parameters:
// The reduce() method takes in:
​
// callback - The function to execute on each array element (except the first element if no initialValue is provided). It takes in
// accumulator - It accumulates the callback's return values.
// currentValue - The current element being passed from the array.
// initialValue (optional) - A value that will be passed to callback() on first call. 
//      If not provided, the first element acts as the accumulator on the first call and callback() won't execute on it.
​
console.log(arr.reduce(logger, 5))
​
// Remove duplicates from an array:
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
​
let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
​
console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]
​
// Grouping Objects by property:
let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (accumulator, currentObject) {
      let key = currentObject[property];
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(currentObject);
      return accumulator;
    }, {});
  }
  
  let groupedPeople = groupBy(people, "age");
  console.log(groupedPeople);
​