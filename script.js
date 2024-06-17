let firstNumber = ""
let secondNumber = ""
let operator = ""
let ans = 0
const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll(".button")


function reset() {
    return firstNumber = "", secondNumber = "", operator = "", ans = 0
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
        screen.removeChild(screen.lastChild)

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
            let content = document.createTextNode(keyPressed);
            screen.appendChild(content)
            operator = keyPressed
            break

        default:
            if (firstNumber == "" && operator == "") {
                let content = document.createTextNode(keyPressed);
                screen.appendChild(content)
                firstNumber += keyPressed

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
}
