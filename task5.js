function rollDice() {
    // Get the selected player (either Player 1 or Player 2)
    const player1Radio = document.getElementById("player1");
    const player2Radio = document.getElementById("player2");

    // If no player is selected, return
    if (!player1Radio.checked && !player2Radio.checked) {
        alert("Please select a player to roll the dice.");
        return;
    }

    // Generate random dice roll (1-6)
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    // Declare variables for the rolls of both players
    let player1Roll = 0;
    let player2Roll = 0;

    // Assign the dice roll to the appropriate player
    if (player1Radio.checked) {
        player1Roll = diceRoll;
        document.getElementById("player1Dice").innerText = player1Roll;
        console.log(`Player 1 rolled a ${player1Roll}`);
    } else if (player2Radio.checked) {
        player2Roll = diceRoll;
        document.getElementById("player2Dice").innerText = player2Roll;
        console.log(`Player 2 rolled a ${player2Roll}`);
    }

    // Now that both players have rolled, compare the results
    // Get the dice roll values of both players (in case a player hasn't rolled yet)
    player1Roll = parseInt(document.getElementById("player1Dice").innerText) || 0;
    player2Roll = parseInt(document.getElementById("player2Dice").innerText) || 0;
    
    let winnerMessage = "";

    // Compare the dice rolls to determine the winner
    if (player1Roll > player2Roll) {
        winnerMessage = "Player 1 Wins!";
        console.log(`Player 1 wins with a roll of ${player1Roll} vs ${player2Roll}.`);
    } else if (player2Roll > player1Roll) {
        winnerMessage = "Player 2 Wins!";
        console.log(`Player 2 wins with a roll of ${player2Roll} vs ${player1Roll}.`);
    } else {
        winnerMessage = "It's a Tie!";
        console.log(`It's a tie with both players rolling ${player1Roll}.`);
    }

    // Display the winner message
    document.getElementById("winner").innerText = winnerMessage;
}
