let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateAndAppend() {
    try {
        display.value = eval(display.value) || '';
    } catch (e) {
        display.value = 'Error';
    }
}