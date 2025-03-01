// Function to simulate a coin flip game until one side wins 11 times
function flipCoinGame() {
    let headsCount = 0;
    let tailsCount = 0;
    
    while (headsCount < 11 && tailsCount < 11) {
        let flip = Math.random() < 0.5 ? "Heads" : "Tails"; // Simulate a coin flip
        
        if (flip === "Heads") {
            headsCount++;
        } else {
            tailsCount++;
        }
        
        console.log(`Flip: ${flip} | Heads: ${headsCount} | Tails: ${tailsCount}`);
    }

    // Declare the winner
    console.log(`🎉 Game Over! ${headsCount === 11 ? "Heads" : "Tails"} wins the game!`);
}

// Start the coin flip game
flipCoinGame();
