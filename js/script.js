const submit = document.getElementById('submit');
const result = document.getElementById('result');
const serverError = document.getElementById('server-error');

const calculateFibonacci = async (url) => {
    try {
        const fibonacciServerResponse = await fetch(url);

        if (!fibonacciServerResponse.ok) {
            throw Error(await fibonacciServerResponse.text());
            //throw Error('SyntaxError: Unexpected non-whitespace character after JSON at position 3');
        }

        const fibonacciServerResult = await fibonacciServerResponse.json();
        return fibonacciServerResult;
    }
    catch (error) {
        //console.log(error);
        serverError.innerHTML = 'Server ' + error;
    }
}

const fibonacci = async (event) => {
    event.preventDefault();
    submit.blur();

    result.innerHTML = '';
    serverError.innerHTML = '';

    const positionNum = document.getElementById('position').value;

    if (positionNum > 50) {
        //console.log('more than 50');
        document.getElementById('position').classList.add('error');
        document.getElementById('error50').classList.remove('hideError');
        return false;
    }

    result.classList.add('spinner-border');
    const resultNum = await calculateFibonacci(`http://localhost:5050/fibonacci/${positionNum}`);
    result.classList.remove('spinner-border');

    result.innerHTML = resultNum.result;
}

submit.addEventListener('click', fibonacci);

document.getElementById('position').addEventListener('keyup', function () {
    document.getElementById('position').classList.remove('error');
    document.getElementById('error50').classList.add('hideError');
    result.innerHTML = '';
    serverError.innerHTML = '';
});
