let firstNumber = ""
let secondNumber = ""
let operator = ""
let ans = 0
const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll(".button")



//Reset function that clears all variables and sets it back to initial state
function reset() {
    return firstNumber = "", secondNumber = "", operator = ""
}

function backspace() {
    screen.removeChild(screen.lastChild) //Removes last character from display

    if (secondNumber) {
        secondNumber = secondNumber.slice(0, -1)
    } else if (operator) {
        operator = ""
    } else {
        firstNumber = firstNumber.slice(0, -1)
    }
}

buttons.forEach((item) => {
    item.addEventListener("click", buttonPress)
})

//Checks which button was pressed, if CLEAR or DELETE was pressed, calls corresponding functions
function buttonPress(event) { 
    const buttonText = event.target.innerText

    if (buttonText == "CLEAR" && screen.hasChildNodes()) {
        screen.replaceChildren()
        reset()

    } else if (buttonText == "DELETE" && screen.hasChildNodes()) {
        backspace()

    //If = is pressed and user has input 2 numbers + operator, calls operate function to calculate the expression
    } else if (buttonText == "=" && secondNumber && operator) {
        operate(parseInt(firstNumber), parseInt(secondNumber), operator)

    //If 2 numbers and operatore have not been input by user, calls updateDisplay function
    } else if (buttonText != "DELETE" && buttonText != "CLEAR" && buttonText != "=") {
        updateDisplay(buttonText)
    }
}

//Checks if there is an existing value for first/second number and operator
//Updates variable and display accordingly
function updateDisplay(keyPressed) {
    switch(keyPressed) {
        case "+":
        case "-":
        case "/":
        case "*":
            if (secondNumber) { //If user has already input 2 numbers and an operator, evaluate the first expression before appending the new operator
                operate(parseInt(firstNumber), parseInt(secondNumber), operator)
            }
            let content = document.createTextNode(keyPressed);
            screen.appendChild(content)
            operator = keyPressed
            break

        default:
            //If user has not input an operator, all numbers pressed must be to input the first number
            if (operator == "") {
                let content = document.createTextNode(keyPressed);
                screen.appendChild(content)
                firstNumber += keyPressed

            //Else if there is already an operator, the user must be inputting the second number
            } else {
                let content = document.createTextNode(keyPressed);
                screen.appendChild(content)
                secondNumber += keyPressed
            }
    }
    return operator, firstNumber, secondNumber
}


//Operate
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
            ans = add(a, b)
            break;

        case "-":
            ans = subtract(a, b)
            break;

        case "*":
            ans = multiply(a, b)
            break;

        case "/":
            ans = divide(a, b)
            break;
    }

    screen.replaceChildren()
    let content = document.createTextNode(ans);
    screen.appendChild(content)
    reset()
    firstNumber = ans.toString()
    ans = 0
    return firstNumber, ans
}
