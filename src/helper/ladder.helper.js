function createLadder(p1Age, p1Position, p2Age, p2Position) {
  if (p1Age > p2Age) {
    const arr = [].fill('', 0, p1Age);
    arr[p1Position] = "p1";
    arr[p2Position] = "p2";
    return [...arr];
  }
  const arr = [].fill('', 0, p2Age);
  arr[p1Position] = "p1";
  arr[p2Position] = "p2";
  return [...arr];
}

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
      if (steps < 0) {
        if (steps === -1) return { winner: prevPlayer, done: true };
        if (steps === -2) {
          updatedLadder[currentPlayerPosition] = 0;
          updatedLadder[currentPlayerPosition + 1] = currentPlayer;
        }
        if (steps < -2) {
          updatedLadder[currentPlayerPosition] = 0;
          updatedLadder[currentPlayerPosition + 2] = currentPlayer;
        }
        const temp = prevPlayer;
        prevPlayer = currentPlayer;
        currentPlayer = temp;
        return { winner: "", done: false };
      }
      if (steps === 1) return { winner: prevPlayer, done: true };
      if (steps === 2) {
        updatedLadder[currentPlayerPosition] = 0;
        updatedLadder[currentPlayerPosition - 1] = currentPlayer;
      }
      if (steps > 2) {
        updatedLadder[currentPlayerPosition] = 0;
        updatedLadder[currentPlayerPosition - 2] = currentPlayer;
      }
      const temp = prevPlayer;
      prevPlayer = currentPlayer;
      currentPlayer = temp;
      return { winner: "", done: false };
    },
  };
  return stepIterrator;
}

module.exports = {createLadder, takeStep}