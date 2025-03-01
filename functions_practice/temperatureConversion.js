const readline = require("readline-sync");

function celsiusToFahrenheit(degC) {
    if (degC < 0 || degC > 100) {
        console.log("Invalid Input! Celsius should be between 0°C and 100°C.");
        return;
    }
    return (degC * 9/5) + 32;
}

function fahrenheitToCelsius(degF) {
    if (degF < 32 || degF > 212) {
        console.log("Invalid Input! Fahrenheit should be between 32°F and 212°F.");
        return;
    }
    return (degF - 32) * 5/9;
}

// Taking user input
console.log("Select Conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");
let choice = parseInt(readline.question("Enter choice (1/2): "));

switch (choice) {
    case 1:
        let celsius = parseFloat(readline.question("Enter temperature in Celsius: "));
        console.log(`${celsius}°C = ${celsiusToFahrenheit(celsius)}°F`);
        break;
    
    case 2:
        let fahrenheit = parseFloat(readline.question("Enter temperature in Fahrenheit: "));
        console.log(`${fahrenheit}°F = ${fahrenheitToCelsius(fahrenheit)}°C`);
        break;

    default:
        console.log("Invalid choice! Please enter 1 or 2.");
}
