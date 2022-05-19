// conditionals

//if statements


console.log("beginning of our script");
let age = prompt("your age please :");

if (age > 18) {
    if (age >= 50) {
        console.log("sorry, you are too old for the club!");
    }
    else {
    console.log("hello boy, come in!!");
    // console.error("ERROR");
    // console.warn("WARN");
    // console.info("INFO");
    }
}
else if (age == 18) {
    console.log("hello, i have to check your id");
}
else {
    console.log("hello, sorry you can not come in!");
}

console.log("endig of our script");

//------------------------------------------------------------------
// switch case

switch (age) {
    case 17:
        console.log("you can come with permission of your parents.");
        break;
    case 16:
        console.log("you can come next year with permission of your parents.");
        break;
    case 18:
        console.log("welcome to club!");
        break;
    default: 
        console.log("you can not come here:(");
        break;
}

//------------------------------------------------------------------
//homework1

let grade1 = prompt("your grade please :");

if (grade1 < 50) {
    console.log("You are not successfull!")
}
else {
    console.log("You are successfull!")
}

//homework2
let grade2 = prompt("your grade please :");
console.log((grade2 < 50) ? ("you are not successfull") : ("You are successfull!"));

//homework3
let num = promt("give the number :");
let oddOrEven = num % 2 ? "Odd" : "Even";
console.log(oddOrEven);

//-------------------------LOOPS----------------------------------

// while loop
let counter1 = 0;
let sum1 = 0;

while (counter1 <= 10) {
    console1.log("counter :", counter1);
    
    counter1++;
    sum1 += counter1;
}

// do...while loop
let counter2 = 10;
let sum2 = 0;

do {
    console2.log("counter :", counter2);
    
    counter2--;
    sum2 += counter2;
} while (counter2 >= 0);
console.log(sum2);

//for loop
let sum3 = 0;

for (let index = 0; index <= 10; index++) {
    console.log("iteration: ", index, " sum: ", sum3);
    sum3 += index;
}
