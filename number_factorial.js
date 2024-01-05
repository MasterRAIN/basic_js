function getFactorial(num) {
    if (typeof num !== 'number') {
        return 'Invalid input. Please provide a number.';
    }
    if (num < 0) {
        return 'Factorial is undefined for negative integers';
    }
    var result = 1;
    for (let i = 1; i <= num; i++) {
        result *= [i];
    }
    return `The factorial of ${num} is ${result}`;
}

const number = 5;
const result = getFactorial(number);

console.log(result);