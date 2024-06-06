let firstNumber = 0
let secondNumber = 0
let operator = ""
const screen = document.querySelector("#screen")


function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, sign) {
    switch(sign) {
        case "+":
            add(a, b)
            break;

        case "-":
            subtract(a, b)
            break;

        case "*":
            multiply(a, b)
            break;

        case "/":
            divide(a, b)
            break;
    }
}

function updateDisplay(button) {
    let content = document.createTextNode(button);
    screen.appendChild(content)
}
