function Game(player1, player2, board) {
  this.player1 = player1;
  this.player2 = player2;
  this.board = board;
  this.whoseTurn = 'X';
  this.turnCounter = 0;
}

function Board(spaces) {
  this.spaces = spaces;
}

function Player(playerSymbol) {
  this.mark = playerSymbol;
}

function Space(coordinateX, coordinateY, markedBy) {
  this.x_coordinate = coordinateX;
  this.y_coordinate = coordinateY;
  this.markedBy = markedBy;
}

Space.prototype.mark_by = function(player) {
  this.markedBy = player;
};

Board.prototype.create = function() {
  var space1 = new Space(1, 1, "");
  this.spaces.push(space1);
  var space2 = new Space(1, 2, "");
  this.spaces.push(space2);
  var space3 = new Space(1, 3, "");
  this.spaces.push(space3);
  var space4 = new Space(2, 1, "");
  this.spaces.push(space4);
  var space5 = new Space(2, 2, "");
  this.spaces.push(space5);
  var space6 = new Space(2, 3, "");
  this.spaces.push(space6);
  var space7 = new Space(3, 1, "");
  this.spaces.push(space7);
  var space8 = new Space(3, 2, "");
  this.spaces.push(space8);
  var space9 = new Space(3, 3, "");
  this.spaces.push(space9);
};

Board.prototype.winner = function(player) {
  if (this.spaces[0].markedBy===player && this.spaces[3].markedBy===player && this.spaces[6].markedBy===player) {
    return true;
  } else if (this.spaces[1].markedBy===player && this.spaces[4].markedBy===player && this.spaces[7].markedBy===player) {
    return true;
  } else if (this.spaces[2].markedBy===player && this.spaces[5].markedBy===player &&  this.spaces[8].markedBy===player) {
    return true;
  } else if (this.spaces[0].markedBy===player && this.spaces[1].markedBy===player && this.spaces[2].markedBy===player) {
    return true;
  } else if (this.spaces[3].markedBy===player && this.spaces[4].markedBy===player && this.spaces[5].markedBy===player) {
    return true;
  } else if (this.spaces[6].markedBy===player && this.spaces[7].markedBy===player && this.spaces[8].markedBy===player) {
    return true;
  } else if (this.spaces[0].markedBy===player && this.spaces[4].markedBy===player && this.spaces[8].markedBy===player) {
    return true;
  } else if (this.spaces[2].markedBy===player && this.spaces[4].markedBy===player && this.spaces[6].markedBy===player) {
    return true;
  } else {
    return false;
  }

};

Game.prototype.nextTurn = function() {
  if (this.whoseTurn === 'X') {
    this.whoseTurn = 'O';
  } else if (this.whoseTurn==='O') {
    this.whoseTurn = 'X';
  } else {
  }
  this.turnCounter+=1;
};

Game.prototype.gameOver = function() {

  if (this.board.winner(this.player1)) {
    return true;
  } else if (this.board.winner(this.player2)) {
    return true;
  } else if (this.turnCounter===9) {
    return true;
  } else {
    return false;
  }
};
