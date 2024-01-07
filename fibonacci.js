function generateFibonacci(nTerms) {
    let sequence = [0, 1];
    while (sequence.length < nTerms) {
        let nextNumber = sequence[sequence.length - 2] + sequence[sequence.length - 1];
        sequence.push(nextNumber);
    }
    return sequence;
}

const numberOfTerms = 15;
const result = generateFibonacci(numberOfTerms);

console.log(result);