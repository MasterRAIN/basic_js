function isPrimeNumber(num) {
    if (typeof num !== 'number') {
        return 'Invalid input. Please provide a number.';
    }
    var prime = true;
    for (let i = 2; i < num; i++) {
        if (num % [i] === 0) { 
            prime = false;
        }
    }
    return prime;
}

const number = 11;
const result = isPrimeNumber(number);

console.log(`${number} is a prime number. ${result}`);