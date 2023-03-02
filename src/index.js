const game = require("./game");
const readline = require("readline");
let lineNumber = 0;
let numOfTest;
let inputs = [];

/**
 * Creating interface to read the inputs for Number of test cases and test records
 * Using game() to calculate the winner
 */

var rl = readline.createInterface({
  input: process.stdin,
});

console.log("Provide number of test cases in between 1 & 10");
rl.on("line", readLine);

function readLine(line) {
  if (lineNumber === 0) {
    if (!isNaN(parseInt(line))) {
      numOfTest = parseInt(line);
      if (numOfTest < 1 && numOfTest < 10) {
        console.log(
          "Provide number of test cases in between 1 & 10. Try again"
        );
      } else {
        lineNumber++;
        console.log("Provide " + numOfTest + " testcases test: ");
        console.log(
          "Please enter player 1 age, player 1 position, player 2 age, player 2 position"
        );
      }
    } else {
      console.log("Invalid Input");
    }
  } else {
    if (inputs.length !== numOfTest) {
      if (line.split(" ").length !== 4) {
        console.log(
          "Please enter player 1 age, player 1 position, player 2 age, player 2 position. Try again"
        );
      } else {
        inputs.push(line);
        if (inputs.length === numOfTest) rl.close();
      }
    }
  }
}

rl.on("close", () => {
  if (inputs.length > 0) {
    console.log("Result:");
    inputs.forEach((input, index) => {
      const startGame = game(...input.split(" "));
      console.log(startGame);
    });
  }
  process.exit();
});