const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');

let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === '') {
            firstOperand += button.value;
            display.textContent = firstOperand;
        } else {
            secondOperand += button.value;
            display.textContent = secondOperand;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === '') {
            operator = button.value;
            display.textContent = operator;
        } else {
            calculate();
            operator = button.value;
            display.textContent = operator;
        }
    });
});

clearButton.addEventListener('click', () => {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = '';
    display.textContent = '0';
});

equalButton.addEventListener('click', () => {
    calculate();
    operator = '';
});

function calculate() {
    if (firstOperand !== '' && secondOperand !== '' && operator !== '') {
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
        }
        firstOperand = result.toString();
        secondOperand = '';
        display.textContent = result;
    }
}
