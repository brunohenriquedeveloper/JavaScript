// calculator program

const display = document.getElementById("display");

function appendtoDisplay(input) {
    display.value += input;
}

function clearDiplay() {
    display.value = "";
}

function calculate() {

    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
    
}