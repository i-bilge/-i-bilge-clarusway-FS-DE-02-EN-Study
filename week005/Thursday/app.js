function sayHello(){
    console.log("hello from sayHello Function...")
}
// sayHello();

function functionOnMouseEnter() {
    console.log("On Mouse Enter Event happened");
}


const btnHelloByCLASS = document.getElementsByClassName("btnHello")[0];
console.log(btnHelloByCLASS);

const btnHelloByNAME = document.getElementsByName("btnHello");
console.log(btnHelloByNAME);

const btnHelloByID = document.getElementById("btnHello");
// console.log(btnHelloByID);
btnHelloByID.onclick = btnClicked;//without parenthesis
btnHelloByID.onmouseenter = btnMouseEnter;

function btnClicked() {
    console.log("btn click event happened...");
}

function btnMouseEnter() {
    console.log("btn mouse enter event happened...");
}

//------------------EVENT LISTENERS--------------------
//Syntax= element.addEventListener(event, eventHandler)

const myDiv = document.getElementById("myDiv");
myDiv.addEventListener("click", changeColor);

function changeColor() {
    myDiv.style.backgroundColor = "red";
}

const myButton = document.getElementsByTagName("button")[2];
// console.log(myButton);
myButton.addEventListener("click", changeColorRandomly);
function changeColorRandomly() {
    const colorR = Math.floor(Math.random() * 255);
    const colorG = Math.floor(Math.random() * 255);
    const colorB = Math.floor(Math.random() * 255);
 
    console.log(colorR);

    myDiv.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}

//accessing the details of our events
const toGuys = document.querySelector(".okGuys");


const eventDetails = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.tagName);
    console.log(e.target.innerText);
    console.log(e.target.innerHTML);

toGuys.addEventListener("click", eventDetails);

}

//BUBBLING and CAPTURING

const benjamin = document.getElementById("benjamin");
const container = document.getElementById("container");

container.addEventListener("click", clickHappened);
benjamin.addEventListener("click", clickBenjaminButton);

function clickHeppened() {
    console.log("this is container click event handler");
}
function clickBenjaminButton() {
    console.log("this is button click event handler");
}