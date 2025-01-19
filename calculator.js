var addBtn = document.getElementById("add");
var subtractBtn = document.getElementById("subtract");
var multiplyBtn = document.getElementById("multiply");
var divideBtn = document.getElementById("divide");

var resultEl = document.getElementById("calculation-result");

function add(num1, num2) {
  resultEl.textContent = num1 + num2;
}

function subtract(num1, num2) {
  resultEl.textContent = num1 - num2;
}

function multiply(num1, num2) {
  resultEl.textContent = num1 * num2;
}

function divide(num1, num2) {
  resultEl.textContent = num1 / num2;
}

addBtn.addEventListener("click", function () {
  let numberOne = parseFloat(document.getElementById("number1").value) || 0;
  let numberTwo = parseFloat(document.getElementById("number2").value) || 0;
  add(numberOne, numberTwo);
});

subtractBtn.addEventListener("click", function () {
  let numberOne = parseFloat(document.getElementById("number1").value) || 0;
  let numberTwo = parseFloat(document.getElementById("number2").value) || 0;
  subtract(numberOne, numberTwo);
});

multiplyBtn.addEventListener("click", function () {
  let numberOne = parseFloat(document.getElementById("number1").value) || 0;
  let numberTwo = parseFloat(document.getElementById("number2").value) || 0;
  multiply(numberOne, numberTwo);
});

divideBtn.addEventListener("click", function () {
  let numberOne = parseFloat(document.getElementById("number1").value) || 0;
  let numberTwo = parseFloat(document.getElementById("number2").value) || 0;
  divide(numberOne, numberTwo);
});
