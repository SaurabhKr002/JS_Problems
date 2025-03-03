// Function to generate an array of 10 random 3-digit numbers
function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100); // Generates a number between 100-999
    }
    return numbers;
}

// Function to find the second smallest and second largest using sorting
function findSecondLargestSmallest(arr) {
    arr.sort((a, b) => a - b); // Sorting array in ascending order

    let secondSmallest = arr[1]; // Second smallest element
    let secondLargest = arr[arr.length - 2]; // Second largest element

    return { secondSmallest, secondLargest };
}

// Main Execution
let numbers = generateRandomNumbers();
console.log("Generated Numbers:", numbers);

let { secondSmallest, secondLargest } = findSecondLargestSmallest(numbers);
console.log("Sorted Numbers:", numbers);
console.log("Second Smallest:", secondSmallest);
console.log("Second Largest:", secondLargest);
