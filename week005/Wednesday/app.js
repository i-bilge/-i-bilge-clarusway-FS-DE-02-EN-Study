// Create a heading tag
const heading = document.createElement("h1")
​
// Create a Text node to be placed inside the heading
const headingText = document.createTextNode("HEADING!")
​
// Append the text to the heading element
heading.appendChild(headingText)
​
// Append the heading element to the main div
// document.getElementById("main").appendChild(heading)
document.querySelector("#main").appendChild(heading)
​
​
// Create an array of names to later become list items:
const listArr = [
    "Chase",
    "Daniel",
    "Ismaill",
    "Barry",
    "Henrry",
    "Jimmy",
    "Thomas",
    "Nicholas"
]
​
// Create a list so we can append names to as list items:
const list = document.createElement("ul")
​
// Create an array of list items using array.map:
const listItemArr = listArr.map((el)=>{
    // creating an empty list item
    let listItem = document.createElement("li")
    // Set text color for the li element:
    listItem.style.color="white"
    // give list items a class name:
    listItem.className = "listItem"
    // creating a text node
    let listText = document.createTextNode(el)
    // inserting our text node into our list item
    listItem.appendChild(listText)
​
    // This is what is sent to the new array
    return listItem
})
​
console.log(listItemArr)
​
for(let i = 0; i < listItemArr.length; i++)
{
    list.appendChild(listItemArr[i])
}
​
document.querySelector("#main").appendChild(list)
​
list.style.backgroundColor="black";
document.body.style.backgroundColor = "grey"
​
let image = document.createElement("img")
image.src = "https://www.akc.org/wp-content/uploads/2017/11/Golden-Retriever-Puppy.jpg"
​
let a = document.createElement("a")
// a.setAttribute("id", "dogLink")
a.id = "dogLink"
a.setAttribute("class", "image")
a.target = "_blank"
a.href = "https://www.petco.com/shop/en/petcostore"
​
a.appendChild(image)
​
document.body.appendChild(a)
​
// Best for performance
heading.textContent = "FISH"
​
// Adding classes to elements:
heading.classList.add("heading")
heading.classList.add("potato")
​
// remove a class
heading.classList.remove("potato")
​
console.log(heading.classList)
​
const LIs = document.getElementsByClassName("listItem")
// const listOfLIs = document.querySelectorAll("li")
// console.log(listOfLIs)
console.log(LIs)
​
// Remove elements:
​
// Element.remove()
for(let i = 0; i < list.children.length; i++){
    if(list.children[i].textContent == "Chase"){
        console.log(list.children[i])
        console.log("item removed.")
        list.children[i].remove()
    }
   
}
// insert before
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
​
// pathList.forEach((element)=>{
//     pathSelectBox.innerHTML += `<option>${element}</option>`
// });
const label = document.createElement("label")
label.setAttribute("for", "name")
label.textContent = "Name: "
​
​
const input = document.createElement("input")
input.name = "name"
input.type = "checkbox"
input.value = "Daniel"
input.textContent = "Daniel"
​
const input2 = document.createElement("input")
input2.name = "name"
input2.type = "checkbox"
input2.value = "Ismaill"
input2.textContent="Ismaill"
​
document.body.appendChild(input)
document.body.appendChild(input2)
​
const names = document.getElementsByName("name")
console.log(names)
​
const input3 = document.createElement("input")
input3.type = "text"
input3.value = "Ismaill"
​
// document.body.appendChild(input3)
​
const button = document.createElement("button")
button.textContent = "BUTTON"
​
document.body.appendChild(button)
​
button.onclick = ()=>{
    console.log("SOMEONE CLICKED OUR BUTTON")
}