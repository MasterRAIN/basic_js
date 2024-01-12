function getOddNum(arr) {
    var oddNum = [];
    if (!Array.isArray(arr) || arr.length === 0) {
        return 'Invalid input. Please provide a non-empty array.'
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNum.push(arr[i]);
        }
    }
    return oddNum;
}

// shorter codes
function getOddNum2(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 'Invalid input. Please provide a non-empty array.'
    }
    const getEvenNum = arr.filter(num => num % 2 !== 0);
    return getEvenNum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = getOddNum(numbers);
const result2 = getOddNum2(numbers);
console.log(result);
console.log(result2);