// longer code 
function getEvenNum(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 'Invalid input. Please provide a non-empty array.'
    }
    var evenNum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNum += arr[i] + ', ';
        }
    }
    return `[ ${evenNum}]`;
}

// shorter codes
function getEvenNum2(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 'Invalid input. Please provide a non-empty array.'
    }
    const getEvenNum = arr.filter(num => num % 2 === 0);
    return getEvenNum;
}

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const result = getEvenNum(numbers);
const result2 = getEvenNum2(numbers);

console.log(result);
console.log(result2);