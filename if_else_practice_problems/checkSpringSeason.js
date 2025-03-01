// Get command-line arguments
const args = process.argv.slice(2);

// Ensure two arguments are provided
if (args.length !== 2) {
    console.log("Usage: node checkSpringSeason.js <day> <month>");
    process.exit(1);
}

// Parse day and month from arguments
const day = parseInt(args[0]);
const month = parseInt(args[1]);

// Function to check if the date falls between March 20 and June 20
function isSpringSeason(day, month) {
    return (
        (month === 3 && day >= 20) || // March 20+
        (month === 4) ||              // April (Full month)
        (month === 5) ||              // May (Full month)
        (month === 6 && day <= 20)    // June up to 20
    );
}

// Print result
console.log(isSpringSeason(day, month));
