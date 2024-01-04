function findMaxNumber(array) {

    if (!Array.isArray(array) || array.length === 0) {
        return 'Invalid input. Please provide a non-empty array';
    }
    var maxNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }

    return maxNumber;
}


const numbers = [14, 20, 11, 6, 3];
const maxNumber = findMaxNumber(numbers);

console.log(maxNumber);