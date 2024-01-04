function reverseStr(str) {
    return str.split('').reverse().join('');
}

const str = "Hello World!";
const result = reverseStr(str);

console.log(`${str} in reverse is ${result}`);