const roll1Btn = document.getElementById("roll1");
const roll2Btn = document.getElementById("roll2");
const resetBtn = document.getElementById("reset");
const score1Display = document.getElementById("score1");
const score2Display = document.getElementById("score2");
const winnerDisplay = document.getElementById("winner");

let Player1Score = 0;
let Player2Score = 0;

// Enable Player 1 button from the start
roll1Btn.disabled = false; 
roll2Btn.disabled = true; // Player 2 cannot roll until Player 1 has rolled

roll1Btn.addEventListener("click", () => {
  // Player 1 rolls the dice
  Player1Score = Math.floor(Math.random() * 6) + 1;
  score1Display.textContent = Player1Score;

  // Disable Player 1 button and enable Player 2 button
  roll1Btn.disabled = true;
  roll2Btn.disabled = false;
});

roll2Btn.addEventListener("click", () => {
  // Player 2 rolls the dice
  Player2Score = Math.floor(Math.random() * 6) + 1;
  score2Display.textContent = Player2Score;

  // Disable Player 2 button after roll
  roll2Btn.disabled = true;

  // Determine the winner
  if (Player1Score > Player2Score) {
    winnerDisplay.textContent = "🏆 Player 1 Wins!";
  } else if (Player2Score > Player1Score) {
    winnerDisplay.textContent = "🏆 Player 2 Wins!";
  } else {
    winnerDisplay.textContent = "🤝 It's a Tie!";
  }
});

resetBtn.addEventListener("click", () => {
  // Reset scores and UI
  Player1Score = 0;
  Player2Score = 0;
  score1Display.textContent = "0";
  score2Display.textContent = "0";
  winnerDisplay.textContent = "";

  // Enable Player 1 roll and disable Player 2 roll
  roll1Btn.disabled = false;
  roll2Btn.disabled = true;
});