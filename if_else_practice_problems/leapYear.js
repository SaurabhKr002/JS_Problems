// Function to check if a year is a leap year
function isLeapYear(year) {
    if (year < 1000 || year > 9999) {
        console.log("Please enter a 4-digit year.");
        return;
    }
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year.");
    } else {
        console.log(year + " is NOT a Leap Year.");
    }
}

// Get input from the command line
const year = parseInt(process.argv[2]);

// Validate input and call function
if (!isNaN(year)) {
    isLeapYear(year);
} else {
    console.log("Usage: node leapYear.js <4-digit year>");
}
