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

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const result = getEvenNum(numbers);

console.log(result);