// Generate 5 random 3-digit numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100); // 100 to 999
}

// Find minimum and maximum values
let min = Math.min(...numbers);
let max = Math.max(...numbers);

// Output the result
console.log("Generated Numbers:", numbers.join(", "));
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);
