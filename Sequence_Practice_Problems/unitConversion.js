// Unit Conversion Program

// a. Convert inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches = ${feet.toFixed(2)} feet`);

// b. Convert rectangular plot dimensions from feet to meters
let lengthInFeet = 60;
let widthInFeet = 40;
const feetToMeter = 0.3048; // 1 ft = 0.3048 meters

let lengthInMeters = lengthInFeet * feetToMeter;
let widthInMeters = widthInFeet * feetToMeter;
console.log(`Rectangular Plot: ${lengthInFeet}ft x ${widthInFeet}ft = ${lengthInMeters.toFixed(2)}m x ${widthInMeters.toFixed(2)}m`);

// c. Calculate the total area of 25 such plots in acres
let areaInMeters = lengthInMeters * widthInMeters;
let totalAreaInMeters = areaInMeters * 25;
const meterToAcre = 0.000247105; // 1 sq meter = 0.000247105 acres

let totalAreaInAcres = totalAreaInMeters * meterToAcre;
console.log(`Total area of 25 plots: ${totalAreaInAcres.toFixed(4)} acres`);
