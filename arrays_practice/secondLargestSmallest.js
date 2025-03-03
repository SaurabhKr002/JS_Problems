// Generate 10 random 3-digit numbers and store them in an array
function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100); // Random 3-digit number (100-999)
    }
    return numbers;
}

// Find the second largest and second smallest element without sorting
function findSecondLargestAndSmallest(arr) {
    let firstMin = Infinity, secondMin = Infinity;
    let firstMax = -Infinity, secondMax = -Infinity;

    for (let num of arr) {
        // Finding the two smallest numbers
        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num < secondMin && num !== firstMin) {
            secondMin = num;
        }

        // Finding the two largest numbers
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num !== firstMax) {
            secondMax = num;
        }
    }

    return { secondMin, secondMax };
}

// Main Execution
let randomNumbers = generateRandomNumbers();
console.log("Generated Numbers:", randomNumbers);

let result = findSecondLargestAndSmallest(randomNumbers);
console.log(`Second Smallest: ${result.secondMin}`);
console.log(`Second Largest: ${result.secondMax}`);
