var display = document.getElementById("display");
var operator = "";
var firstNumber = "";
var secondNumber = "";

function displayNumber(num) {
  display.value += num;
}

function displayOperator(op) {
  operator = op;
  firstNumber = display.value;
  display.value = "";
}

function clearDisplay() {
  display.value = "";
  operator = "";
  firstNumber = "";
  secondNumber = "";
}

function calculate() {
  secondNumber = display.value;
  var result;
  switch (operator) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    default:
      result = "Invalid operator";
  }
  display.value = result;
}
