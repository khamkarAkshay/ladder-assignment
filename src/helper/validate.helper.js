/**
 * @param {number} p1Age - validate player 1 age
 * @param {number} p2Age - validate player 2 age
 * @returns {error: boolean, message: string} returns error and valid message after validating player 1 and player 2 age
 */
function validateAge(p1Age, p2Age) {
  if (p1Age === null || p1Age === undefined)
    return { error: true, message: "Player 1 age cannot be empty" };

  if (p2Age === null || p2Age === undefined)
    return { error: true, message: "Player 2 age cannot be empty" };

  if (p1Age <= 0)
    return { error: true, message: "Player 1 age cannot be 0 or less than 0" };

  if (p2Age <= 0)
    return { error: true, message: "Player 2 age cannot be 0 or less than 0" };

  if (p1Age === p2Age)
    return { error: true, message: "Player 1 and Player 2 age cannot be same" };

  if (isNaN(p1Age))
    return { error: true, message: "Player 1 age should be number" };

  if (isNaN(p2Age))
    return { error: true, message: "Player 2 age should be number" };

  return { error: false, message: "" };
}

/**
 * @param {number} p1Position - player 1 position
 * @param {number} p2Position - player 2 position
 * @returns {error: boolean, message: string} returns error and valid message after validating player 1 and player 2 position
 */
function validatePosition(p1Position, p2Position) {
  if (p1Position === null || p1Position === undefined)
    return { error: true, message: "Player 1 position cannot be empty" };

  if (p2Position === null || p2Position === undefined)
    return { error: true, message: "Player 2 position cannot be empty" };

  if (p1Position < 0)
    return { error: true, message: "Player 1 position cannot be less than 0" };

  if (p2Position < 0)
    return { error: true, message: "Player 2 position cannot be less than 0" };

  if (p1Position === p2Position)
    return {
      error: true,
      message: "Player 1 and Player 2 position cannot be same",
    };
  if (isNaN(p1Position))
    return { error: true, message: "Player 1 position should be number" };

  if (isNaN(p2Position))
    return { error: true, message: "Player 2 position should be number" };

  return { error: false, message: "" };
}

module.exports = { validateAge, validatePosition };
