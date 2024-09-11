let firstNumber = 0
let secondNumber = 0
let operator = ""
const screen = document.getElementById("screen")
const buttons = document.querySelectorAll(".button")


buttons.forEach((item) => {
    item.addEventListener("click", updateDisplay)
})


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

function updateDisplay(event) {
    const buttonText = event.target.innerText

    // Get the current text length on the screen
    let screenText = screen.textContent.length || ""

    if (buttonText == "CLEAR" && screen.hasChildNodes()) {
        screen.replaceChildren()

    } else if (buttonText == "DELETE" && screen.hasChildNodes()) {
        screen.removeChild(screen.lastChild)

    } else if (buttonText != "DELETE" && buttonText!= "CLEAR"){
        if (screenText < 18) { //Only allows text to be appended to the screen element if the total display length is <18
            let content = document.createTextNode(buttonText);
            screen.appendChild(content)
        }
    }
}


