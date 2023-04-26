function guessingGame() {
  let number = Math.floor(Math.random() * 100);
  let gameOver = false;
  let count = 0;

  return function (guess) {
    if (guess < number && gameOver === false) {
      count += 1;
      return `${guess} is too low!`;
    }
    if (guess > number && gameOver === false) {
      count += 1;
      return `${guess} is too high!`;
    }
    if (guess === number && gameOver === false) {
      gameOver = true;
      return `You win! You found ${number} in ${count} guesses!`;
    }

    if (gameOver === true) {
      return `The game is over, you won already!`;
    }
  };
}

let game = guessingGame();
console.log(game(40));

module.exports = { guessingGame };
