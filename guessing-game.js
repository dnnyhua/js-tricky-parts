function guessingGame() {
    const answer = Math.floor(Math.random() * 100);
    let isGameOver = false;
    let guessCount = 0;

    return function makeGuess(number) {
        if (isGameOver) return "The game is over, you already won!";
        guessCount++;

        if (number === answer) {
            isGameOver = true;
            const guessWord = guessCount === 1 ? "guess" : "guesses";
            return `You win! You found ${number} in ${guessCount} ${guessWord}.`;
        }

        if (number < answer) return `${number} is too low!`;
        if (number > answer) return `${number} is too high!`;
    };
}

module.exports = { guessingGame };
