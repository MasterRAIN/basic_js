function addTwoNumbers(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input. Please provide two numbers.';
    }
    var sum = a + b;
    return sum;
}

const firstNumber = 50;
const secondNumber = 19;
const sum = addTwoNumbers(firstNumber, secondNumber);

console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`);