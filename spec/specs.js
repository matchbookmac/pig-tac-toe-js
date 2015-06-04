describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.eql("X");
  });
});

describe('Space', function() {
  it("returns the x coordinate", function() {
    var testSpace = new Space(1, 2, "");
    expect(testSpace.x_coordinate).to.equal(1);
  });

  it("returns the y coordinate", function() {
    var testSpace = new Space(1, 2, "");
    expect(testSpace.y_coordinate).to.equal(2);
  });

  it("lets a player mark the space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1, 2, "");
    testSpace.mark_by(testPlayer)
    expect(testSpace.markedBy).to.equal(testPlayer);
  });
});

describe("Board", function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = new Board();
    expect(testBoard.spaces.length).to.equal(9);
  });

  it("determines if there is a winner at a given point in the game", function() {
    var testBoard = new Board();
    var testPlayer1 = new Player("X")
    var testPlayer2 = new Player("O")
    testBoard.spaces[0].mark_by(testPlayer1);
    testBoard.spaces[1].mark_by(testPlayer1)
    testBoard.spaces[2].mark_by(testPlayer1)
    expect(testBoard.winner(testPlayer1)).to.equal(true);
  });

  it("determines if there isn't a winner at a given point in the game", function() {
    var testBoard = new Board();
    var testPlayer1 = new Player("X")
    var testPlayer2 = new Player("O")
    testBoard.spaces[1].mark_by(testPlayer1);
    testBoard.spaces[3].mark_by(testPlayer1)
    testBoard.spaces[7].mark_by(testPlayer1)
    expect(testBoard.winner(testPlayer1)).to.equal(false);
  });
});

describe("Game", function() {
  it("creates two players and a board when a new game is started", function() {
    var testGame = new Game();
    expect(testGame.board.spaces[5].x_coordinate).to.equal(2);
  });

  it("starts with 'X'", function() {
    var testGame = new Game();
    expect(testGame.whoseTurn).to.equal('X');
  });

  it("advances to the next player", function() {
    var testGame = new Game();
    testGame.nextTurn();
    expect(testGame.whoseTurn).to.equal('O');
  });

  it("checks to see if the game is over", function() {
    var testGame = new Game();
    expect(testGame.gameOver()).to.equal(false);
  });
});
