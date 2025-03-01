// Function to simulate the gambler's betting game
function gamblerGame() {
    let money = 100;  // Initial money
    const goal = 200; // Goal amount
    let bets = 0;      // Count of total bets placed
    let wins = 0;      // Count of wins

    while (money > 0 && money < goal) {
        bets++;  // A new bet is placed

        // Simulate win or loss (50% chance)
        if (Math.random() < 0.5) {
            money++;  // Win: Gain Rs. 1
            wins++;   // Increase win count
        } else {
            money--;  // Loss: Lose Rs. 1
        }
    }

    // Print final results
    console.log(` Game Over! Final Money: Rs. ${money}`);
    console.log(` Total Bets Placed: ${bets}`);
    console.log(` Total Wins: ${wins}`);
}

// Start the game
gamblerGame();
