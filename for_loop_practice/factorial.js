// Function to calculate factorial
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers!";
    }
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Read input from command line argument
const num = parseInt(process.argv[2]);

// Validate input and display output
if (isNaN(num)) {
    console.log("Invalid input! Please enter a valid number.");
} else {
    console.log(`${num}! = ${factorial(num)}`);
}
