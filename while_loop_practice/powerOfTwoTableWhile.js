// Read input from command-line argument
let n = parseInt(process.argv[2]);

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Please enter a non-negative integer.");
    process.exit(1);
}

// Initialize variables
let power = 0;
let value = 1; // 2^0 = 1

console.log(`Powers of 2 up to 2^${n} (till 256):`);

while (power <= n && value <= 256) {
    console.log(`2^${power} = ${value}`);
    value *= 2; // Multiply by 2 for the next power
    power++;
}
