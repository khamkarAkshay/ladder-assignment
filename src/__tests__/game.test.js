const game = require('../game');

describe('1.0: Validating player 1 age', () => {
  test('1.1: Player 1 age is 0', () => {
    const player1Age = 0;
    const player1Position = 10;
    const player2Age = 10;
    const player2Position = 4;
    const startGame = game(player1Age, player1Position, player2Age, player2Position);
    expect(startGame).toBe("Player 1 age cannot be 0 or less than 0");
  });

  test("1.2: Player 1 age is less than 0", () => {
    const player1Age = -1;
    const player1Position = 10;
    const player2Age = 10;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 1 age cannot be 0 or less than 0");
  });

  test("1.3: Player 1 age is not passed", () => {
    const player1Age = null;
    const player1Position = 10;
    const player2Age = 10;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 1 age cannot be empty");
  });

  test("1.4: Player 1 age is string", () => {
    const player1Age = "string_test";
    const player1Position = 10;
    const player2Age = 10;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 1 age should be number");
  });
  
  test("1.5: Player 1 age is valid", () => {
    const player1Age = 10;
    const player1Position = 10;
    const player2Age = 8;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe(1);
  });
});

describe("2.0: Validating player 2 age", () => {
  test("2.1: Player 2 age is 0", () => {
    const player1Age = 10;
    const player1Position = 10;
    const player2Age = 0;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 2 age cannot be 0 or less than 0");
  });

  test("2.2: Player 2 age is less than 0", () => {
    const player1Age = 10;
    const player1Position = 10;
    const player2Age = 0;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 2 age cannot be 0 or less than 0");
  });

  test("2.3: Player 2 age is not passed", () => {
    const player1Age = 10;
    const player1Position = 10;
    const player2Age = null;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 2 age cannot be empty");
  });

  test("2.4: Player 2 age is string", () => {
    const player1Age = 10;
    const player1Position = 10;
    const player2Age = 'string_test';
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 2 age should be number");
  });

  test("2.5: Player 2 age is valid", () => {
    const player1Age = 8;
    const player1Position = 10;
    const player2Age = 10;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe(0);
  });
});

describe('3.0: Player 1 and Player 2 having same age', () => {
  test('3.1: Player 1 and Player 2 having same age', () => {
    const player1Age = 8;
    const player1Position = 10;
    const player2Age = 8;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 1 and Player 2 age cannot be same");
  })

  test("3.2: Player 1 and Player 2 age is valid", () => {
    const player1Age = 8;
    const player1Position = 10;
    const player2Age = 10;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe(0);
  });
});

describe('4.0: Validating Player 1 position', () => {
  test('4.1: Player 1 position is less than 0', () => { 
    const player1Age = 8;
    const player1Position = -10;
    const player2Age = 10;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 1 position cannot be less than 0");
  })
  
  test("4.2: Player 1 position is not passed", () => {
    const player1Age = 8;
    const player1Position = null;
    const player2Age = 10;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 1 position cannot be empty");
  });

  test("4.3: Player 1 position is string", () => {
    const player1Age = 10;
    const player1Position = "test_string";
    const player2Age = 8;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 1 position should be number");
  });

  test("4.4: Player 1 position is valid", () => {
    const player1Age = 10;
    const player1Position = 10;
    const player2Age = 5;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe(1);
  });
})

describe("5.0: Validating Player 2 position", () => {
  test("5.1: Player 2 position is less than 0", () => {
    const player1Age = 8;
    const player1Position = 10;
    const player2Age = 10;
    const player2Position = -4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 2 position cannot be less than 0");
  });

  test("5.2: Player 2 position is not passed", () => {
    const player1Age = 8;
    const player1Position = 4;
    const player2Age = 10;
    const player2Position = null;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 2 position cannot be empty");
  });

  test("5.3: Player 2 position is string", () => {
    const player1Age = 10;
    const player1Position = 10;
    const player2Age = 8;
    const player2Position = "test_string";
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 2 position should be number");
  });

  test("5.3: Player 2 position is valid", () => {
    const player1Age = 4;
    const player1Position = 10;
    const player2Age = 15;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe(0);
  });
});

describe("6.0: Player 1 and Player 2 having same position", () => {
  test("6.1: Player 1 and Player 2 having same position", () => {
    const player1Age = 8;
    const player1Position = 10;
    const player2Age = 10;
    const player2Position = 10;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe("Player 1 and Player 2 position cannot be same");
  });

  test("6.2: Player 1 and Player 2 position is valid", () => {
    const player1Age = 8;
    const player1Position = 10;
    const player2Age = 10;
    const player2Position = 4;
    const startGame = game(
      player1Age,
      player1Position,
      player2Age,
      player2Position
    );
    expect(startGame).toBe(0);
  });
});