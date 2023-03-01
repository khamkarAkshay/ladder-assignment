const { createLadder, takeStep } = require("../helper/ladder.helper");
const validate = require("../helper/validate.helper");

function game(p1Age, p1Position, p2Age, p2Position) {
  const isValid = validate(p1Age, p1Position, p2Age, p2Position);
  if (isValid.error) {
    return isValid.message;
  }

  const ladder = createLadder(p1Age, p1Position, p2Age, p2Position);

  const iterrator = takeStep(ladder, p1Age > p2Age ? "p1" : "p2");
  let result = iterrator.next();

  while (!result.done) {
    result = iterrator.next();
  }

  return result.winner === "p1" ? 1 : 0;
}

module.exports = game;
