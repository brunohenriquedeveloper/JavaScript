// Calculator Program

const display = document.getElementById('inp');

function appendtoDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

