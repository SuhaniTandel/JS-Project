document.getElementById("startGame").addEventListener("click", function () {
    const startRange = parseInt(prompt("Enter the starting range: ", "1"));
    const endRange = parseInt(prompt("Enter the ending range: ", "100"));
  
    if (isNaN(startRange) || isNaN(endRange) || startRange >= endRange) {
      alert("Invalid range! Please enter valid numbers with the starting range less than the ending range.");
      return;
    }
  
    const randomNum = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
    let guess;
  
    alert(`I have selected a number between ${startRange} and ${endRange}. Can you guess what it is?`);
  
    while (true) {
      guess = parseInt(prompt("Enter your guess: "));
  
      if (isNaN(guess)) {
        alert("Please enter a valid number.");
        continue;
      }
  
      if (guess < randomNum) {
        alert("Too low! Try again. 👇");
      } else if (guess > randomNum) {
        alert("Too high! Try again. 👆");
      } else {
        alert("Congratulations! 🎉 You've guessed the number correctly!");
        break;
      }
    }
  });
  