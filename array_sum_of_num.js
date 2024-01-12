function arrayTotal(arr) {
    let firstNum = arr[0];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let number = Number(arr[i])
        let checkNum = /\d/.test(number);
        if (checkNum) {
          total += number;
        }
    }
    return total;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'];
const result = arrayTotal(numbers);
console.log(result);