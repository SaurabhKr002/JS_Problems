// Get the command-line argument (n)
let n = parseInt(process.argv[2]);

// Check if n is a valid number
if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
    process.exit(1);
}

let harmonic = 0;

// Calculate the harmonic number
for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}

// Output the result
console.log(`Harmonic Number H(${n}) = ${harmonic}`);
