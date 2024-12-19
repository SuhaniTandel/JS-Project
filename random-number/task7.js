function randomNumber() {
    // Get the range from the user
    let startRange = parseInt(window.prompt("Enter the starting range: "));
    let endRange = parseInt(window.prompt("Enter the ending range: "));

    // Validate the input
    if (isNaN(startRange) || isNaN(endRange) || startRange >= endRange) {
        window.alert("Invalid range. Please enter valid starting and ending numbers, with the starting number less than the ending number.");
        return;
    }

    // Generate the random number
    const randomNum = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
    let guess;

    // Game introduction
    window.alert(`Welcome to the Number Guessing Game! 🎮\nTry to guess the number I'm thinking of, between ${startRange} and ${endRange}.`);

    // Start the guessing loop
    do {
        guess = window.prompt("Enter your guess: ");
        
        // Check if user canceled the prompt
        if (guess === null) {
            window.alert("Game exited. See you next time! 👋");
            return;
        }

        // Convert guess to an integer
        guess = parseInt(guess);

        if (isNaN(guess)) {
            window.alert("Invalid input. Please enter a valid number.");
            continue;
        }

        // Provide feedback on the guess
        if (guess < randomNum) {
            window.alert("Too low! Try again.👇");
        } else if (guess > randomNum) {
            window.alert("Too high! Try again.👆");
        } else {
            window.alert("Congratulations! 🎉 You've guessed the number correctly!");
        }
    } while (guess !== randomNum);
}

// Start the game
randomNumber();
