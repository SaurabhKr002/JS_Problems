let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

// Performing arithmetic operations
let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

// Storing results in an array
let results = [op1, op2, op3, op4];

// Finding maximum and minimum
let maxValue = Math.max(...results);
let minValue = Math.min(...results);

// Displaying results
console.log(`Results:\n1. a + b * c = ${op1}\n2. a % b + c = ${op2}\n3. c + a / b = ${op3}\n4. a * b + c = ${op4}`);
console.log(`Maximum Value: ${maxValue}`);
console.log(`Minimum Value: ${minValue}`);
