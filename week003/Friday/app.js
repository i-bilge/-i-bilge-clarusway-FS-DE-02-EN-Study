// console.log("Just started")

// function decleration
function alarm() {
    // alert("Functions!!!")
  }
  alarm();
  
  function greet() {
    // console.log("Hello")
  }
  greet();
  greet();
  greet();
  
  // greet.userName = "Omer";
  
  // console.log(greet)
  
  // return keyword
  // Named functions are hoisted
  function sayHi() {
    // console.log("Hello Clarusway")
    return "I said Hi";
  }
  
  const outputConst = sayHi();
  let outputLet = sayHi();
  var outputVar = sayHi();
  // console.log("outputConst", outputConst)
  // console.log("outputLet", outputLet)
  // console.log("outputVar", outputVar)
  
  // Passing values to functions
  // const userName = "John";
  const userSurname = "Doe";
  
  function greetGuest(name, surname) {
    console.log(`${name} - ${surname}`);
  }
  
  // greetGuest("John", "Doe")
  // greetGuest(userSurname, userName )
  // greetGuest(userName)
  // greetGuest()
  
  //Initial or default value to params
  function greetGues2(name = "Jonny", surname = "Does") {
    console.log(`${name} - ${surname}`);
  }
  // greetGues2("Emily")
  
  //scope
  const evenNum = 100;
  // console.log("evenNum", evenNum);
  
  function writeNumber() {
    const unEvenNum = 101;
    console.log("unEvenNum", unEvenNum);
    console.log("evenNum", evenNum);
  }
  // console.log("unEvenNum", unEvenNum)
  
  // writeNumber()
  
  // let human = "Emily Doe"
  
  // function changeName (string) {
  //     string = "Mark Doe"
  // }
  
  // console.log("human", human)
  // changeName()
  // console.log("human", human)
  
  // Objects are being passed to functions
  
  // let game = {
  //     name :"COD2",
  //     year: 2002,
  // }
  
  // function changeYear(obj) {
  //     // obj.year = 2022
  //     // console.log(obj.year)
  //     obj = { name: "Counter Strike", year: 2000 }
  //     console.log("game", obj)
  // }
  
  // changeYear(game)
  
  // console.log("game",game)
  
  //Function Expressions
  sayHi2();
  
  function sayHi2() {
    //   console.log("function decleration");
  }
  
  const sayHi3 = function () {
    //   console.log("function expression");
  };
  
  sayHi3();
  
  // const sayHi4 = new Function("number", "return number * number")
  function multipleNumber(number) {
    //   console.log(number * number);
    return number * number;
  }
  
  const result4 = multipleNumber(5);
  
  // console.log("result4", result4)
  
  // Immediately Invoked Function Expressions
  
  // (function() {
  //     console.log("Hi5");
  // })()
  
  // multipleNumber(23)
  // multipleNumber(132)
  // multipleNumber(4124)
  // multipleNumber(122)
  // multipleNumber(0)
  // multipleNumber("1")
  
  // decleration
  function sum(num1, num2) {
    return num1 + num2;
  }
  const total = sum(20, 30);
  // console.log("total", total);
  
  // arrow function with normal syn
  const sum1 = (num1, num2) => {
    return num1 + num2;
  };
  // const total1 = sum1(20, 30);
  // console.log("total1", total1);
  
  const sum2 = (num1, num2) => num1 + num2;
  
  // const total2 = sum2(20, 30);
  // console.log("total2", total2);
  
  const sum3 = (num1, num2) => {
    console.log("num1 + num2", num1 + num2);
    return num1 + num2;
  };
  
  let name2 = "Ronaldo";
  let name3 = "Messi";
  
  // Exercise
  function printPlayers(player1, player2) {
    console.log(`Welcome ${player1} and ${player2}`);
  }
  // => 1. Arrow function
  // => 2. Execute it with variable names
  
  // const printPlayers = (player1, player2) =>
  //   console.log(`Welcome ${player1} and ${player2}`);
  
  //   printPlayers(name2, name3)
  
  let num1 = 100;
  // console.log("at the global scope");
  // console.log("num1", num1);
  
  function func1() {
    let num1 = 101;
  // //   console.log("..inside func1");
  // //   console.log("num1", num1);
    if (num1 < 999) {
      let num1 = 102;
      num1++;
      // // console.log("..inside if");
      // // console.log("num1", num1); // 1
    }
    num1++;
  // //   console.log("num1", num1); // 2
  }
  
  func1();
  console.log("num1", num1); // 3
  
  const sameLevel1 = (a) => {
    console.log("a111", a);
  };
  
  const sameLevel2 = () => {
    let a = 30;
    console.log("a222", a);
    sameLevel1(a);
  };
  // sameLevel2()
  
  // This keyword
  // methods are functions
  const cat = {
    name: "Smelly Cat",
    age: 9,
    whatName() {
      console.log(this.name);
    },
  };
  
  cat.whatName();
  
  const school = {
      numOfStudents : 45,
      maxCapacity: 100,
      availableSeats () {
          return this.maxCapacity - this.numOfStudents
      }
  }
  
  const seats = school.availableSeats()
  console.log("seats", seats)
  
  // console.log("this", this)
  // console.log("this", window)
  
  const multiplyBy5 = (num) => {
      console.log("this", this)
      console.log(num * 5)
   
  }
  
  multiplyBy5(10)