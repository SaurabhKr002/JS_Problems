const readline = require("readline");

// Setup readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 and 100.");
console.log("I will guess it using a binary search method!");

let low = 1, high = 100;

function findMagicNumber() {
    if (low > high) {
        console.log("Something went wrong!");
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);
    
    rl.question(`Is your number ${mid}? (yes/no): `, (answer) => {
        if (answer.toLowerCase() === "yes") {
            console.log(`Hooray! Your magic number is ${mid} 🎉`);
            rl.close();
        } else {
            rl.question(`Is your number less than ${mid}? (yes/no): `, (response) => {
                if (response.toLowerCase() === "yes") {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
                findMagicNumber(); // Recursively continue guessing
            });
        }
    });
}

// Start the magic number guessing
findMagicNumber();
