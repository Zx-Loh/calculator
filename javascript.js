// Calculator functions

function add(a, b)
{
    return a + b;
};

function subtract(a, b)
{
    return a - b;
};

function multiply(a, b)
{
    return a * b;
};

function divide(a, b)
{
    return a / b;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

// Takes in 2 numbers and an operator, and calls the corresponding function based on the operator
// Stores the result in a variable called "result" and returns it
function operate(firstNumber, secondNumber, operator)
{
    let result = 0;

    switch(operator)
    {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;

        case "*":
            result = multiply(firstNumber, secondNumber);
            break;

        case "/":
            result = divide(firstNumber, secondNumber);
            break;
    };

    return result;
};