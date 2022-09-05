const submitButton = document.getElementById('submit');
const resultSpan = document.getElementById('result');
let temp1;
let temp2;
let next;

function initTemp() {
    temp1 = 0;
    temp2 = 1;
}

function calculateFibonacci(x) {
    for (let i = 0; i < x; i++) {
        next = temp1 + temp2;
        temp1 = temp2;
        temp2 = next;
    }

    return temp1;
}

function getInputNumber(e) {
    e.preventDefault();
    initTemp();
    const inputNumber = document.getElementById('inputNumber').value;
    const result = calculateFibonacci(inputNumber);
    resultSpan.innerHTML = result;
}

submitButton.addEventListener('click', getInputNumber);