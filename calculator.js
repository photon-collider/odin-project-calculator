let operatorStr = "";

let firstNumber = null;
let clearDisplay = false;

const display = document.querySelector('#display');

const btnDecimal = document.querySelector('#btn-decimal');
btnDecimal.addEventListener('click', () =>{
  if(!display.textContent.includes('.')){
    display.textContent += "."
  };
});

const btnAC = document.querySelector('#btn-ac');
btnAC.addEventListener('click', () => {
  display.textContent = "";
  operatorStr = "";
  firstNumber = null;
});

const btnPlusMinus = document.querySelector('#btn-plus-minus');
btnPlusMinus.addEventListener('click', () => {
  temp = +display.textContent;
  temp *= -1;
  display.textContent = temp.toString();
});


function computePrevOperation(){
  if ( (firstNumber !== null) && clearDisplay === false){
    let secondNumber = +display.textContent;
    computedResult = operate(firstNumber, secondNumber, operatorStr);

    display.textContent = computedResult.toString();
    firstNumber = computedResult;
  }
  else {
    firstNumber = +display.textContent;
  }
}

const btnPlus = document.querySelector('#btn-plus');
btnPlus.addEventListener('click', () =>{
  computePrevOperation();
  operatorStr = "+";
  clearDisplay = true;
});


const btnMinus = document.querySelector('#btn-minus');
btnMinus.addEventListener('click', () =>{
  computePrevOperation();
  operatorStr = "-";
  clearDisplay = true;
});

const btnMultiply = document.querySelector('#btn-multiply');
btnMultiply.addEventListener('click', () =>{
  computePrevOperation();
  operatorStr = "*";
  clearDisplay = true;
});

const btnDivide = document.querySelector('#btn-divide');
btnDivide.addEventListener('click', () =>{
  computePrevOperation();
  operatorStr = "/";
  clearDisplay = true;
});

function operate (firstNumber, secondNumber, operatorStr){
  switch (operatorStr) {
    case "*": return firstNumber * secondNumber;
    case "/": return firstNumber / secondNumber;
    case "+": return firstNumber + secondNumber;
    case "-": return firstNumber - secondNumber;
  }
};

const btnEqual = document.querySelector('#btn-equal');
btnEqual.addEventListener('click', () => {
  if (firstNumber !== null){
    let secondNumber = +display.textContent;
    computedResult = operate(firstNumber, secondNumber, operatorStr);
    display.textContent = computedResult.toString();

    firstNumber = null;
  }
});

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    buttonID = button.id;
    if(clearDisplay){
      display.textContent = buttonID[buttonID.length-1];
      clearDisplay = false;
    }
    else{
      display.textContent += buttonID[buttonID.length-1];
    }

  });
});



function addDigit(digit){
  display.textContent += digit;
};

console.log('hello');
