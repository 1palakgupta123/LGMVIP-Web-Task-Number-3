const display = document.getElementById('display');

function appendNumber(number) {
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.textContent.slice(-1);
    if ('+-*/%'.includes(lastChar)) {
        display.textContent = display.textContent.slice(0, -1) + operator;
    } else {
        display.textContent += operator;
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/'));
    } catch {
        display.textContent = 'Error';
    }
}
