console.log("OOP");

const name = "Joe";
const age = 30;

//1. Object Literals
// const userOne = {
//     name: "Joe",
//     email: "joe@clarusway.com",
//     age: 30,
//     // Below is a method
//     login: function() {
//         console.log("User logged in")
//     }
// }

// const userTwo = {
//     name: "Emily",
//     email: "emily@clarusway.com",
//     age: 25,
//     login: function() {
//         console.log("User logged in")
//     }
// }
// const userThree = {
//     name: "Jack",
//     email: "jack@clarusway.com",
//     age: 45,
//     login: function() {
//         console.log("User logged in")
//     }
// }

// If I neede to create 3 users
// 2. Factory Function
function createUser(name, middleName, email, age) {
  return {
    name: name,
    email: email,
    age: age,
    "sur-name": middleName,
    login: function () {
      console.log("USER logged in");
    },
    logout: function () {
      console.log("USER logged out");
    },
  };
}
// const userOne = createUser("Joe", "Doe", "joe@clarusway.com", 30);
// const userTwo = createUser("Emily", "Done", "emily@clarusway.com", 25);
// const userThree = createUser("Jack", "Does", "jack@clarusway.com", 45);

// console.log("userOne", userOne);
// console.log("userTwo", userTwo);
// console.log("userThree", userThree);

// const something = "email";

// // Accesing values of object
// console.log("userOne email address", userOne.email); // Dot notation
// console.log("userOne email address", userOne[something]); // Bracket notation Either you pass property name as a string or a defined variable
// console.log("userOne sur-name", userOne["sur-name"]);

// userOne.login();
// userTwo.login();
// userThree.login();

// Modifying the value
// userOne.age = 31;
// console.log("userOne - modified", userOne);

// adding a new property to the object - isAdmin
// userOne.isAdmin = false;
// console.log("userOne - added", userOne);
// console.log("userTwo - nonadded", userTwo);

// deleting a property
// delete userOne.name;
// console.log("userOne - deleted", userOne);

// 3.Constructor Functions
function User(name, email, money) {
  let interestRate = 0.3;
  this.name = name;
  this.email = email;
  this.money = money;
  this.login = () => {
    console.log(`${this.email.toUpperCase()} has logged out.`);
  };
  this.getDebt = () => {
    console.log(`User's debt is ${this.money * interestRate + money}`);
  };

  //GETTERS AND SETTER
  Object.defineProperty(this, "interestRate", {
    get: () => {
      return interestRate;
    },
    set: (newValue) => {
      interestRate = newValue;
      return interestRate;
    },
  });
}

function Admin(...args) {
  User.apply(this, args); // Inheritance
  this.isAdmin = true;
  this.deleteUser = () => {
    console.log("Deleted a user.");
  };
}

const userAdmin = new Admin("Joe", "joe@clarusway.com", 30);
// console.log("admin", userAdmin);

// User.prototype.login = () => {
//   console.log(`${this.email} has logged in.`);
// };

// const userOne = new User("Joe", "joe@clarusway.com", 3000);
// const userTwo = new User("Emily", "emily@clarusway.com", 2500);
// const userThree = new User("Jack", "jack@clarusway.com", 4500);

// new keyword does 3 things :
// 1. It creates an empty Object {}
// 2. Attach this keyword to the object this => {}
// 3. Assings the properties and then return the object

// console.log("userOne", userOne);
// console.log("userTwo", userTwo);
// console.log("userThree", userThree);

// 4. CLASSES syntax

class User2 {
  interestRate = 0.3;

  constructor(name, email, money) {
    this.name = name;
    this.email = email;
    this.money = money;
  }

  login() {
    console.log(`${this.email.toUpperCase()} has logged out.`);
  }

  logout() {
    console.log(`User's debt is too much`);
  }

  speak() {
    return "I speak.";
  }
}

const userOne = new User2("Joe", "joe@clarusway.com", 3000);
const userTwo = new User2("Emily", "emily@clarusway.com", 2500);

class Admin2 extends User2 {
  constructor(name, email, money, isAdmin) {
    super(name, email, money);
    this.isAdmin = isAdmin;
  }

  deleteUser() {
    console.log(this.interestRate);
  }

  speak() {
    let fristSpeak = super.speak();
    return "I Just spoke" + fristSpeak;
  }
}

const userAdmin2 = new Admin2("Jack", "jack@clarusway.com", 4500, true);

userAdmin2["isAdmin"] = false;
// console.log("userAdmin2", userAdmin2);

// Object iterations
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries?retiredLocale=tr
const keys = Object.keys(userAdmin2);
console.log("keys", keys);

const values = Object.values(userAdmin2);
console.log("values", values);

const entries = Object.entries(userAdmin2)
console.log("entries", entries);

for (let item of Object.values(userAdmin2)) {
    console.log("item", item)
}

console.log("age" in userAdmin2) // returns a boolean value