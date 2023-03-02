/**
 * @param {number} p1Age - player 1 age 
 * @param {number} p1Position - player 1 position
 * @param {number} p2Age - player 2 age 
 * @param {number} p2Position - player 2 page 
 * @returns array with default players position
 */

function createLadder(p1Age, p1Position, p2Age, p2Position) {
  if (p1Age > p2Age) {
    const arr = [].fill("", 0, p1Age);
    arr[p1Position] = "p1";
    arr[p2Position] = "p2";
    return [...arr];
  }
  const arr = [].fill("", 0, p2Age);
  arr[p1Position] = "p1";
  arr[p2Position] = "p2";
  return [...arr];
}

/**
 * @param {number} currentPlayerPosition - position of current player
 * @param {number} step - step to move forward or backward
 * @returns new position of current player
 */

function getCurrentStep(currentPlayerPosition, step) {
  if (step < 0) return currentPlayerPosition + (step < -2 ? 2 : 1);
  return currentPlayerPosition - (step > 2 ? 2 : 1);
}

/**
 * @param {array} ladder - array with current players position
 * @param {string} player - player taking step on ladder 'p1' for player 1 and 'p2' for player 2 
 * @returns {winner: string, done: boolean} current status of game and winner of game. 
 */

function takeStep(ladder, player) {
  const updatedLadder = [...ladder];
  let prevPlayer = player === "p1" ? "p2" : "p1";
  let currentPlayer = player;

  const stepIterrator = {
    next() {
      const prevPlayerPosition = updatedLadder.findIndex(
        (step) => step === prevPlayer
      );
      const currentPlayerPosition = updatedLadder.findIndex(
        (step) => step === currentPlayer
      );
      const steps = currentPlayerPosition - prevPlayerPosition;
      if (steps === -1 || steps === 1) return { winner: prevPlayer, done: true };
      updatedLadder[currentPlayerPosition] = 0;
      updatedLadder[getCurrentStep(currentPlayerPosition, steps)] =
        currentPlayer;
      const temp = prevPlayer;
      prevPlayer = currentPlayer;
      currentPlayer = temp;
      return { winner: "", done: false };
    },
  };
  return stepIterrator;
}

module.exports = { createLadder, takeStep };
