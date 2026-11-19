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
    // Check for divide by 0
    if (b == 0)
    {
        alert("Nice try =)");
        return 0;
    }
    return a / b;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
const display = document.querySelector("#display");
const numbers = "01233456789"

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

        case "x":
            result = multiply(firstNumber, secondNumber);
            break;

        case "/":
            result = divide(firstNumber, secondNumber);
            break;
    };

    return result;
};


// Function to update the number variable
function updateNumber(number)
{
    // Checks if an operator button has been pressed. If not, appends digit to firstNumber variable
    // Otherwise, append digit to secondNumber variable
    if (operator == "")
    {
        firstNumber = firstNumber * 10 + number;
    }
    else
    {
        secondNumber = secondNumber * 10 + number;
    }
}

// Function to update display
function updateDisplay(number)
{
    // Clears current display and reupdates the text content of display with current variables
    display.textContent = "";
    let displayText = "";
    displayText = `${number}`;
    display.textContent = displayText;
}

// Function to update the operator variable with the latest input
function updateOperator(sign)
{
    operator = sign;
}

// Evaluate the current equation with th eoperate function, and reset all variables so the result can 
// be used in the next equation
function evaluate()
{
    firstNumber = operate(firstNumber, secondNumber, operator);
    updateOperator("");
    secondNumber = 0
    updateDisplay(firstNumber); 
}

// Function that clears all variables and displays
function clear()
{
    firstNumber = 0;
    secondNumber = 0;
    operator = "";

    updateDisplay(firstNumber);
}

// Attach event listeners on all buttons to update the number variables and operator when clicked
const buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent

        if (numbers.includes(value))
        {
            updateNumber(Number(value)); 
            
            if (operator == "")
            {
                updateDisplay(firstNumber);
            }
            else 
            {
                updateDisplay(secondNumber);
            }
        }
        else 
        {
            // If clear button pressed
            if (value == "Clear")
            {
                clear();
            }
            // If equals button pressed, evaluate current equation
            // set the answer as the first number, and clear operator and second number varialbe
            else if (value == "=") 
            {
                evaluate();
            }
            // Operator was pressed
            else
            {
                // If a pair of numbers have already been keyed in, evaluate those first 
                if (secondNumber != 0)
                {
                    evaluate();
                }
                updateOperator(value);
            }
        }
    })
});