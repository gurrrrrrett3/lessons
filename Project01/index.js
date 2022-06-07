const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let guess = 0;
let answer = Math.floor(Math.random() * 100) + 1;

askQuestion();

function askQuestion() {
  rl.question("Guess a number between 1 and 100: ", (guess) => {
    guess = parseInt(guess);
    if (guess < answer) {
      console.log("Too low!");
      askQuestion()
    } else if (guess > answer) {
      console.log("Too high!");
      askQuestion()
    } else {
      console.log("You got it! The number was " + answer);
      process.exit();
    }
  });
}
