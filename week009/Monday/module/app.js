// import { add , inc, dec } from "./mymodule.js"; is eq below
import * as MyMath from "./mymodule.js"

import WORKING_HOURS_WEEK from "./constants.js";
import { addString } from "./mymodule2.js";

console.log("MyMath", MyMath)
const resultNumber = MyMath.add(2, 3, 7);
const resultString = addString("Hello ", "World!");
console.log("resultNumber", resultNumber);
console.log("resultString", resultString);

// console.log("WORKING_HOURS_WEEK", WORKING_HOURS_WEEK);

// const result2 = inc(WORKING_HOURS_WEEK);
// console.log("result2", result2);
