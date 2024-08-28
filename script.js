const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            setOperator(value);
        } else if (value === '.') {
            addDecimal();
        } else {
            addDigit(value);
        }
    });
});

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
}

function calculateResult() {
    if (currentNumber === '' || previousNumber === '') return;

    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                display.value = 'Error: Division by zero';
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.value = result.toString();
    currentNumber = '';
    previousNumber = '';
    operator = '';
}

function setOperator(value) {
    if
