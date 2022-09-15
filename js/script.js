let temp1;
let temp2;
let next;

function calculateFibonacci(num) {
    for (let i = 0; i < num; i++) {
        next = temp1 + temp2;
        temp1 = temp2;
        temp2 = next;
    }

    return temp1;
}

const submit = document.getElementById('submit');
const result = document.getElementById('result');

function fibonacci(event) {
    event.preventDefault();

    temp1 = 0;
    temp2 = 1;

    const positionNum = document.getElementById('position').value;
    const resultNum = calculateFibonacci(positionNum);

    result.innerHTML = resultNum;
}

submit.addEventListener('click', fibonacci);