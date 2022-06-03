const inputFirst = document.getElementById("first");
const inputSecond = document.getElementById("second");
const operation = document.querySelector("#operation");
const submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("mouseenter", () => {
  submit.textContent = "Now move out mouse from here!";
});

submit.addEventListener("mouseleave", () => {
  const firstNumber = Number(inputFirst.value);
  const secondNumber = Number(inputSecond.value);
  const selectedOperation = operation.value;

  if (selectedOperation === "add") {
    result.textContent = firstNumber + secondNumber;
  }
  if (selectedOperation === "substract") {
    result.textContent = firstNumber -  secondNumber;
  }
  if (selectedOperation === "multiply") {
    result.textContent = firstNumber * secondNumber;
  }
  if (selectedOperation === "divide") {
    result.textContent = firstNumber / secondNumber;
  }

  submit.textContent = "Mouse Move Here";
});
