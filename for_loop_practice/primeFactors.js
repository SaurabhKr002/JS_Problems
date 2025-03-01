// Function to compute prime factors of a number using prime factorization
function primeFactors(n) {
    if (n < 2) {
        console.log("No prime factors for numbers less than 2.");
        return;
    }

    console.log(`Prime factors of ${n} are:`);

    // Divide by 2 until odd
    while (n % 2 === 0) {
        console.log(2);
        n = n / 2;
    }

    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            console.log(i);
            n = n / i;
        }
    }

    // If n is still greater than 2, it's a prime factor itself
    if (n > 2) {
        console.log(n);
    }
}

// Read input from command-line arguments
const num = parseInt(process.argv[2]);

// Validate input
if (isNaN(num) || num < 1) {
    console.log("Invalid input! Please enter a positive integer.");
} else {
    primeFactors(num);
}
