const button1 = document.getElementById("sign-in")
const button2 = document.getElementById("google-search-btn")

const validator = () => {
    const age = prompt("Please enter your age")
    if(age < 50) {
        alert("You are too young to sign in!")
    } else {
        alert("Welcome to the club!!!")
    }
}

button1.addEventListener("click", validator)
button2.addEventListener("click", validator)