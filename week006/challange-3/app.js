let idInfo = document.getElementById("inputArea");
let btn1 = document.getElementById("btnCheck");
let output = document.getElementById("output");

// our function have to write in output area the validation.
function idValidator(id) {
  let isValid = true;
  let input = idInfo.value;
  //first of all  we are checking the primitive rules: 11 digits & firts digit
  if (input.length != 11) {
    isValid = false;
  } else {
    if (input[0] == 0) {
      isValid = false;
    } 
    //then we are creating sum of odd and even numbers to check 10th & 11th digits
    else {
      let oddValues = +input[0] + +input[2] + +input[4] + +input[6] + +input[8];
      let evenValues = +input[1] + +input[3] + +input[5] + +input[7];
      let digit10 = oddValues * 7 - evenValues;
      digit10 = digit10 % 10;
      let digit11 = 0;
      for (let index = 0; index < 9; index++) {
        digit11 += +input[index];
      }
      digit11 += digit10;
      digit11 = digit11 % 10;
      console.log(digit11);
      if (input[9] != digit10 || input[10] != digit11) {
          isValid = false;
      }
    }
  }

// At the end we are creating our conditioning to have the result in page  
  if (isValid) {
              output.innerHTML = `<p> ${input} is a valid TR ID </p>`;
            }
    else {
    output.innerHTML = `<p> ${input} is not a valid TR ID </p>`;
  }
}

btn1.addEventListener("click", idValidator);
