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

for (let $digitButton of $digitButtons) {
  $digitButton.addEventListener("click", onClickDigit);
}
for (let $operationButton of $operationButtons) {
  $operationButton.addEventListener("click", onClickOperator);
}
$ACButton.addEventListener("click", onClickAC);

const onClickDigit = (event) => {
  if (String(inputNum).length >= 3) {
    alert("숫자는 세 자리까지만 입력 가능합니다!");
    return;
  }
  const clickedNum = Number(event.target.innerHTML);
  inputNum = inputNum * 10 + clickedNum;
  storedNum = inputNum;
  checkInputDigit = true;
  print(inputNum);
};

const onClickOperator = (event) => {
  const newOperator = event.target.innerHTML;
  if (checkInputDigit) {
    result = calculate();
    print(result);
  }
  inputNum = 0;
  setOperator(newOperator);
};

const onClickAC = () => {
  inputNum = 0;
  operator = "";
  result = 0;
  print(result);
};

const setOperator = (newOperator) => {
  if (newOperator !== "=") {
    operator = newOperator;
  }
  checkInputDigit = false;
};
const print = (num) => {
  $totalView.innerHTML = num;
};

const calculate = () => {
  calculateList = {
    "/": storedNum === 0 ? "Infinity" : parseInt(result / storedNum),
    X: result * storedNum,
    "-": result - storedNum,
    "+": result + storedNum,
    "": result || storedNum,
  };
  return calculateList[operator];
};
