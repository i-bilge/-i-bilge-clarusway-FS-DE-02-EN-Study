let todoList = [
    { id: 0, title: "Go shopping.", completed: true },
    { id: 1, title: "Read a book.", completed: false },
    { id: 2, title: "Clean the house.", completed: false },
    { id: 3, title: "Finish the assignment.", completed: false },
    { id: 4, title: "Task #5", completed: true }
];
const ulTodoList = document.getElementById("ulTodoList");
// console.log(ulTodoList);
const spanCompletedTasks = document.querySelector("#spanCompletedTasks");
const spanAllTasks = document.querySelector("#spanAllTasks");
// console.log("spanCompletedTasks: ", spanCompletedTasks);
// console.log("spanAllTasks: ", spanAllTasks);
const buttonAddNewTodo = document.getElementById("buttonAddNewTodo");
const inputNewTodo = document.getElementById("inputNewTodo");
// console.log(inputNewTodo, buttonAddNewTodo);
const displayTodos = (todoElements) => {
    ulTodoList.innerHTML = "";
    todoElements.forEach(element => {
        const tempListElement = document.createElement("li");
        tempListElement.innerText = element.title;
        tempListElement.setAttribute("data-id", element.id);
        if (element.completed) {
            tempListElement.classList.add("completed");
        } else {
            tempListElement.classList.add("unCompleted");
        }
        tempListElement.addEventListener("click", changeStatus)
        ulTodoList.appendChild(tempListElement);
    });
    updateFooter(todoElements);
}
function changeStatus(event) {
    console.log(event.target.getAttribute("data-id"));
    const tempIndex = todoList.findIndex(element => element.id == event.target.getAttribute("data-id"));
    console.log("todoList[tempIndex].completed: ", todoList[tempIndex].completed);
    todoList[tempIndex].completed = !todoList[tempIndex].completed;
    displayTodos(todoList);
}
displayTodos(todoList);
function updateFooter(todoElements) {
    let counterCompleted = 0;
    todoElements.forEach(element => {
        if (element.completed) counterCompleted++
    });
    spanCompletedTasks.innerHTML = counterCompleted;
    spanAllTasks.innerHTML = todoElements.length;
}
buttonAddNewTodo.addEventListener("click", () => {
    if (inputNewTodo.value == "") return;
    const tempTodoObject = {};
    tempTodoObject.title = inputNewTodo.value;
    tempTodoObject.completed = false;
    todoList.push(tempTodoObject);
    inputNewTodo.value = "";
    displayTodos(todoList);
});

fetch('https://jsonplaceholder.typicode.com/')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        todoList = json;
        displayTodos(todoList);
    })