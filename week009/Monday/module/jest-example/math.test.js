const {
  calculateTotal,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  produceUser,
} = require("./math.js");

  //ES6 syntax
// import {
//   calculateTotal,
//   fahrenheitToCelsius,
//   celsiusToFahrenheit,
//   produceUser,
// } from "./math.js";

test("calculateTotal functionality", () => {
  expect(calculateTotal).toBeDefined();
  expect(calculateTotal(100)).toBe(118);
  expect(calculateTotal(100, 0.3)).toBe(130);
});

test("fahrenheitToCelsius functionality", () => {
  expect(fahrenheitToCelsius).toBeDefined();
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test("celsiusToFahrenheit functionality", () => {
  expect(celsiusToFahrenheit).toBeDefined();
  expect(celsiusToFahrenheit(10)).toBe(50);
});

test("produceUser functionality", () => {
  expect(produceUser).toBeDefined();
  expect(produceUser("Joe", "Doe", 30)).not.toHaveProperty("joined");
  expect(produceUser("Joe", "Doe", 40)).toHaveProperty("age");
  expect(produceUser("Joe", "Doe", 40)).toStrictEqual({
    firstName: "Joe",
    secondName: "Doe",
    age: 40,
  });
});
