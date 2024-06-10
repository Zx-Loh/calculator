let firstNumber = 0
let secondNumber = 0
let operator = ""
const screen = document.querySelector("#screen")
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
    const buttonnText = event.target.innerText
    if (buttonnText == "CLEAR" && screen.hasChildNodes()) {
        screen.replaceChildren()

    } else if (buttonnText == "DELETE" && screen.hasChildNodes()) {
        screen.removeChild(screen.lastChild)

    } else if (buttonnText != "DELETE" && buttonnText!= "CLEAR"){
        let content = document.createTextNode(buttonnText);
        screen.appendChild(content)
    }
}


