const { createLadder, takeStep } = require("../helper/ladder.helper");
const { validateAge, validatePosition } = require("../helper/validate.helper");

/**
 * 
 * @param {number} p1Age - player 1 age
 * @param {number} p1Position - player 1 position 
 * @param {number} p2Age - player 2 age 
 * @param {number} p2Position - player 2 position
 * @returns winner - returns 1 for player 1 and 0 for player 2
 */
function game(p1Age, p1Position, p2Age, p2Position) {
  const isAgeValid = validateAge(p1Age, p2Age);
  const isPositionValid = validatePosition(p1Position, p2Position);
  if (isAgeValid.error) {
    return isAgeValid.message;
  }

  if (isPositionValid.error) {
    return isPositionValid.message;
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
