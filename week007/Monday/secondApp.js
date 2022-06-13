let todoList = [
    {
        id: 0,
        title: "Go shopping.",
        completed: false
    },
    {
        id: 1,
        title: "Read a book.",
        completed: true
    },
    {
        id: 2,
        title: "Clean the house.",
        completed: true
    },
    {
        id: 3,
        title: "Task 4.",
        completed: false
    },
    {
        id: 4,
        title: "Task 5.",
        completed: true
    }
];
const ulTodoList = document.getElementById("ulTodoList");
const buttonAddNewTodo = document.getElementById("buttonAddNewTodo");
const inputNewTodo = document.getElementById("inputNewTodo");
const tasksTotal = document.getElementById("tasksTotal");
const tasksCompleted = document.getElementById("tasksCompleted");
function displayTodos(todoElements) {
    ulTodoList.innerHTML = "";
    todoElements.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("div-list");
        const tempListItem = document.createElement("li");
        tempListItem.innerText = element.title;
        tempListItem.setAttribute("data-id", element.id);
        if (element.completed) tempListItem.classList.add("checked");
        else tempListItem.classList.add("unchecked");
        const tempButton = document.createElement("button");
        tempButton.innerText = "Delete";
        tempButton.classList.add("btnDelete");
        tempButton.addEventListener("click", deleteItem);
        tempListItem.addEventListener("click", changeStatus);
        div.appendChild(tempListItem);
        div.appendChild(tempButton);
        ulTodoList.appendChild(div);
    });
    updateFooter(todoElements);
}
displayTodos(todoList);
function updateFooter(todoElements) {
    let counterCompleted = 0;
    todoElements.forEach(element => {
        if (element.completed) counterCompleted++
    });
    tasksCompleted.innerHTML = counterCompleted;
    tasksTotal.innerHTML = todoElements.length;
}
function deleteItem(e) {
    e.stopPropagation();
    const tempIndex = todoList.findIndex(element => element.id == e.target.previousElementSibling.getAttribute("data-id"));
    todoList.splice(tempIndex, 1);
    displayTodos(todoList);
}
function changeStatus() {
    console.log("empty.");
}
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        todoList = json;
        displayTodos(todoList);
    })