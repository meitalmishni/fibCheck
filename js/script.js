const fibonacciNo = document.getElementById('fibonacciNo');
const result = document.getElementById('result');

const num = 13;
fibonacciNo.innerHTML = num;

let temp1 = 0;
let temp2 = 1;
let next;

function calculateFibonacci(num) {
    for (let i = 0; i < num; i++) {
        next = temp1 + temp2;
        temp1 = temp2;
        temp2 = next;
    }

    return temp1;
}

const calcResult = calculateFibonacci(num);
result.innerHTML = calcResult;



