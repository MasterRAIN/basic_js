function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

const str = 'nurses run';
const result = isPalindrome(str);

console.log(`${str} is a palindrome? ${result}`);