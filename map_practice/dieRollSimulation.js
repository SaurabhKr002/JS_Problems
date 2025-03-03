const dieRollResults = new Map();
let maxRolls = 10;

// Initialize the map with die numbers (1-6)
for (let i = 1; i <= 6; i++) {
    dieRollResults.set(i, 0);
}

// Function to roll the die (random number between 1 and 6)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

let reachedMax = false;

// Continue rolling until any number appears 10 times
while (!reachedMax) {
    let roll = rollDie();
    dieRollResults.set(roll, dieRollResults.get(roll) + 1);

    // Check if any number has reached 10 times
    if (dieRollResults.get(roll) === maxRolls) {
        reachedMax = true;
    }
}

// Finding min and max occurring number
let minValue = Math.min(...dieRollResults.values());
let maxValue = Math.max(...dieRollResults.values());

let minNumbers = [];
let maxNumbers = [];

// Get numbers that have min and max occurrences
for (let [key, value] of dieRollResults.entries()) {
    if (value === minValue) {
        minNumbers.push(key);
    }
    if (value === maxValue) {
        maxNumbers.push(key);
    }
}

console.log("Final Die Roll Results:", dieRollResults);
console.log("Number(s) that reached max 10 times:", maxNumbers);
console.log("Number(s) that occurred least times:", minNumbers);
