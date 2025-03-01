const readline = require("readline-sync");

function isPalindrome(num) {
    let originalNum = num.toString();
    let reversedNum = originalNum.split('').reverse().join('');
    return originalNum === reversedNum;
}

function checkTwoPalindromes(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`${num1} and ${num2} are both Palindromes.`);
    } else if (isPalindrome(num1)) {
        console.log(`${num1} is a Palindrome, but ${num2} is not.`);
    } else if (isPalindrome(num2)) {
        console.log(`${num2} is a Palindrome, but ${num1} is not.`);
    } else {
        console.log(`Neither ${num1} nor ${num2} are Palindromes.`);
    }
}

// Taking user input
let num1 = parseInt(readline.question("Enter first number: "));
let num2 = parseInt(readline.question("Enter second number: "));

checkTwoPalindromes(num1, num2);
