// calculator program

let display = document.getElementById("display") as HTMLInputElement;

function appendToDisplay(key) {
    display.value += key;
}

function calculate() {
    display.value = eval(display.value);
}

function clearDisplay() {
    display.value = "";
}
