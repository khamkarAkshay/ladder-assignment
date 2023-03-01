const game = require("./game");
const prompt = require("prompt");

prompt.start();

console.log(
  "Please enter Player 1 Age, Player 1 Position, Player 2 Age, Player 2 Position:"
);
prompt.get(
  ["player1Age", "player1Position", "player2Age", "player2Position"],
  function (error, { player1Age, player1Position, player2Age, player2Position }) {
    if (error) {
      console.log(error);
      return;
    }
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    console.log(startGame === 1 ? 'Player 1 is winner!': 'Player 2 is winner!');
  }
);