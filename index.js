const firstInput = document.querySelector("#number1");
const secondInput = document.querySelector("#number2");
const output = document.querySelector("#result");
const sumButton = document.querySelector("#sum");
const subButton = document.querySelector("#sub");
const divButton = document.querySelector("#div");
const mulButton = document.querySelector("#mul");
const modButton = document.querySelector("#mod");
const clearButton = document.querySelector("#clear");
output.innerText = 0;

function calculate(e) {
  const a = Number(firstInput.value);
  const b = Number(secondInput.value);
  const operator = e.target.innerText;
  if (isNaN(a) || isNaN(b)) {
    alert("Enter numbers, not letters");
    clear();
  } else if (a == "" || b == "") {
    alert("You leave empty input");
    clear();
  } else {
    const operate = (operator) => {
      switch (operator) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "/":
          return a / b;
        case "*":
          return a * b;
        case "%":
          return a % b;
      }
    };
    output.innerText = operate(operator);
  }
}
const clear = () => {
  firstInput.value = "";
  secondInput.value = "";
  output.innerText = 0;
};
sumButton.addEventListener("click", calculate);
subButton.addEventListener("click", calculate);
divButton.addEventListener("click", calculate);
mulButton.addEventListener("click", calculate);
modButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clear);
