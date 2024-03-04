//calculator program

const display = document.getElementsByid('inp');

function appendtoDisplay(input) {
    display.value =+ input;
}

function clearDisplay(){
    display.value = '';
}

function calculate() {
    try { display.value = eval(display.value)
    } catch (error) {
        display.value = 'Error';
    }
}