// Get the input number from command-line arguments
let number = parseInt(process.argv[2]);

// Function to check if a number is prime
function isPrime(n) {
    if (n < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i * i <= n; i++) { // Check divisibility up to sqrt(n)
        if (n % i === 0) return false;
    }
    return true;
}

// Check and display result
if (isPrime(number)) {
    console.log(number + " is a Prime Number.");
} else {
    console.log(number + " is NOT a Prime Number.");
}
