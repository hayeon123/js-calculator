let inputNum = 0;
let storedNum = 0;
let operator = "";
let result = 0;
let checkInputDigit = false;
const $ = (selector) => document.querySelector(selector);
const $totalView = $("#total");
const $digitButtons = document.querySelectorAll(".digit");
const $operationButtons = document.querySelectorAll(".operation");
const $ACButton = $("#modifier");

function initCalculator() {
  inputNum = 0;
  operator = "";
  result = 0;
  print(result);
}

function digitClick(event) {
  if (String(inputNum).length >= 3) {
    alert("숫자는 세 자리까지만 입력 가능합니다!");
    return;
  }
  const clickedNum = Number(event.target.innerHTML);
  inputNum = inputNum * 10 + clickedNum;
  storedNum = inputNum;
  checkInputDigit = true;
  print(inputNum);
}

function operatorClick(event) {
  const newOperator = event.target.innerHTML;
  if (!checkInputDigit) {
    setOperator(newOperator);
    return;
  }
  result = calculate();
  print(result);
  setOperator(newOperator);
  checkInputDigit = false;
}

function setOperator(newOperator) {
  inputNum = 0;
  if (newOperator !== "=") {
    operator = newOperator;
  }
}
function print(num) {
  $totalView.innerHTML = num;
}

function calculate() {
  calculateList = {
    "/": storedNum === 0 ? "Infinity" : parseInt(result / storedNum),
    X: result * storedNum,
    "-": result - storedNum,
    "+": result + storedNum,
    "": result || storedNum,
  };
  return calculateList[operator];
}

for (let digitButton of $digitButtons) {
  digitButton.addEventListener("click", digitClick);
}
for (let operationButton of $operationButtons) {
  operationButton.addEventListener("click", operatorClick);
}
$ACButton.addEventListener("click", initCalculator);
