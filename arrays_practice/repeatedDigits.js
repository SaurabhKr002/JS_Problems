function findRepeatedDigits() {
    let repeatedDigitsArray = [];

    for (let i = 10; i < 100; i++) {
        let tens = Math.floor(i / 10);
        let ones = i % 10;

        if (tens === ones) {
            repeatedDigitsArray.push(i);
        }
    }

    return repeatedDigitsArray;
}

console.log("Repeated Digit Numbers (0-100):", findRepeatedDigits());
