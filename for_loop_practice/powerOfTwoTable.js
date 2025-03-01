// Read command-line argument
let n = parseInt(process.argv[2]);

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Please enter a non-negative integer.");
    process.exit(1);
}

// Print table of powers of 2
console.log(`Powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
