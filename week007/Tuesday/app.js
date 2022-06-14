//variables

const secondaryDisplay = document.querySelector(".secondary-display");
const primaryDisplay = document.querySelector(".primary-display");
const buttons = document.querySelector(".buttons-container");

// functions
const acEl = document.querySelector(".ac");
const pmEl = document.querySelector(".pm");
const percentEl = document.querySelector(".percent");

// operators
const additionEl = document.querySelector(".addition"); // +
const subtractionEl = document.querySelector(".subtraction"); // -
const multiplicationEl = document.querySelector(".multiplication"); // x
const divisionEl = document.querySelector(".division"); // /
const equalEl = document.querySelector(".equal"); // =
let operatorMemory = null;

buttons.addEventListener("click", (event) => {
  // console.log("event", event)
  if (event.target.classList.contains("number")) {
    if (primaryDisplay.textContent === "0") {
      primaryDisplay.textContent = event.target.innerHTML;
    } else {
      primaryDisplay.textContent =
        primaryDisplay.textContent + event.target.innerHTML;
    }
  }

  if (event.target.classList.contains("operator")) {
    const currentValueStr = primaryDisplay.textContent;

    secondaryDisplay.textContent = currentValueStr + event.target.innerHTML;
    primaryDisplay.textContent = "0";
    operatorMemory = event.target.innerHTML;
  }

  if (event.target.classList.contains("equal")) {
    const valuePrimary = parseFloat(primaryDisplay.textContent);
    const valueSecondary = parseFloat(
      secondaryDisplay.textContent.replace(/[×−+÷]/g, "")
    );
    let result;
    switch (operatorMemory) {
      case "+":
        result = valuePrimary + valueSecondary;
        break;
      case "−":
        result = valueSecondary - valuePrimary;
        break;
      case "×":
        result = valueSecondary * valuePrimary;
        break;
      case "÷":
        result = valueSecondary / valuePrimary;
        break;

      default:
        break;
    }
    secondaryDisplay.textContent = result;
    primaryDisplay.textContent = "0";
  }

  if (event.target.classList.contains("function")) {
    const functionType = event.target.textContent;
    switch (functionType) {
      case "AC":
        primaryDisplay.textContent = "";
        secondaryDisplay.textContent = "";
        break;
      case "%":
        secondaryDisplay.textContent = primaryDisplay.textContent / 100;
        primaryDisplay.textContent = "0";
        break;
      case "±":
        if (!primaryDisplay.textContent.includes("−")) {
          primaryDisplay.textContent = "-" + primaryDisplay.textContent;
        } else {
          primaryDisplay.textContent = primaryDisplay.textContent.split("−")[1];
        }
        break;
      default:
        break;
    }
  }

  if (
    event.target.classList.contains("decimal") &&
    !primaryDisplay.textContent.includes(".")
  ) {
    primaryDisplay.textContent = primaryDisplay.textContent + ".";
  }
});

const showTime = () => {
  let date = new Date(); // current time
  let hour = date.getHours(); // hour
  let minute = date.getMinutes(); // hour
  let seconds = date.getSeconds(); // hour
  // let miliSeconds = date.getMilliseconds()

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hour + ":" + minute + ":" + seconds;

  document.getElementById("digitalClock").innerText = time;

  setInterval(showTime, 1000);
};

showTime();
