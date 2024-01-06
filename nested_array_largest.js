function largestNestedNum(nestedArray) {
    let largest = nestedArray[0][0];
    for (let arr of nestedArray) {
        for (let num of arr) {
            if (num > largest) {
                largest = num;
            }
        }
    }
    return largest;
}

const nestedArray = [
    [5, 13, 25],
    [4, 9, 7],
    [23, 17, 11]
];
const result = largestNestedNum(nestedArray);
console.log(`The largest number in the nested array is ${result}`);