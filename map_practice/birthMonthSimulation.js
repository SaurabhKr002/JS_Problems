// Function to generate random birth months and store individuals accordingly
function generateBirthMonths() {
    let birthMonthMap = new Map();

    // Generate birth month for 50 individuals
    for (let i = 1; i <= 50; i++) {
        let birthMonth = Math.floor(Math.random() * 12) + 1; // Random month between 1-12

        // If the month already exists, push the individual to the array
        if (birthMonthMap.has(birthMonth)) {
            birthMonthMap.get(birthMonth).push(i);
        } else {
            birthMonthMap.set(birthMonth, [i]);
        }
    }

    return birthMonthMap;
}

// Function to print birth month distribution
function printBirthMonths(birthMonthMap) {
    console.log("Individuals grouped by birth month:");
    for (let [month, individuals] of birthMonthMap.entries()) {
        console.log(`Month ${month}: Individuals ${individuals.join(", ")}`);
    }
}

// Main execution
let birthMonthData = generateBirthMonths();
printBirthMonths(birthMonthData);
