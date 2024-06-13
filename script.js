let firstNumber = ""
let secondNumber = ""
let operator = ""
const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll(".button")


buttons.forEach((item) => {
    item.addEventListener("click", buttonPress)
})

function buttonPress(event) {
    const buttonText = event.target.innerText

    if (buttonText == "CLEAR" && screen.hasChildNodes()) {
        screen.replaceChildren()

    } else if (buttonText == "DELETE" && screen.hasChildNodes()) {
        screen.removeChild(screen.lastChild)

    } else if (buttonText == "=" && secondNumber && operator) {
        operate(firstNumber, secondNumber, operator)

    } else if (buttonText != "DELETE" && buttonText != "CLEAR" && buttonText != "=") {
        updateDisplay(buttonText)
    }
}

function updateDisplay(keyPressed) {
    switch(keyPressed) {
        case "+":
        case "-":
        case "/":
        case "*":
            let content = document.createTextNode(keyPressed);
            screen.appendChild(content)
            firstNumber = keyPressed
            operator = keyPressed
            break

        default:
            if (firstNumber == "") {
                const buttonText = parseInt(numberPressed)
                let content = document.createTextNode(buttonText);
                screen.appendChild(content)
                firstNumber = keyPressed
            } 
    }

}

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
