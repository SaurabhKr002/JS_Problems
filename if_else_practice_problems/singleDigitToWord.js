const readline = require("readline");

// Setup readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert number to word
function numberToWord(number) {
    switch (number) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Invalid input! Enter a single-digit number (0-9).";
    }
}

// Read input from user
rl.question("Enter a single-digit number (0-9): ", (input) => {
    const num = parseInt(input);
    console.log("Number in words:", numberToWord(num));
    rl.close();
});
