// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Read input range from command line arguments
const start = parseInt(process.argv[2]);
const end = parseInt(process.argv[3]);

// Validate inputs
if (isNaN(start) || isNaN(end) || start < 0 || end < 0 || start > end) {
    console.log("Invalid input! Please enter a valid range (start <= end, non-negative numbers).");
} else {
    console.log(`Prime numbers between ${start} and ${end}:`);
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}
