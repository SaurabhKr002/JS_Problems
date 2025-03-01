const readline = require("readline-sync");

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Function to check if a number is prime and if its palindrome is also prime
function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        console.log(`${num} is a Prime number.`);
        let palindromeNum = getPalindrome(num);
        if (isPrime(palindromeNum)) {
            console.log(`Its palindrome ${palindromeNum} is also a Prime number.`);
        } else {
            console.log(`Its palindrome ${palindromeNum} is NOT a Prime number.`);
        }
    } else {
        console.log(`${num} is NOT a Prime number.`);
    }
}

// Taking user input
let number = parseInt(readline.question("Enter a number: "));
checkPrimeAndPalindrome(number);
