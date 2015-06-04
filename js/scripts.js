'use strict;'

$( document ).ready(function ( ) {
  var game = new Game();
  var board = game.board;
  var player1 = game.player1;
  var player2 = game.player2;


  var spaces = $('table#play-board').children().find('td');
  for (var i = 0; i <= 8; i++ ) {
    var space = $(spaces[i]);
    space.attr("id", i);
  };


  for (space in spaces) {
    if (parseInt(space) < 9) {

      // console.log("space");
      $("td#" + space).on("click", function(event) {
        if (board.spaces[event.target.id].markedBy === ""){
          var player = game.whoseTurn.mark;
          board.spaces[event.target.id].mark_by(game.whoseTurn);
          $(event.target).text(player);
          game.nextTurn();
          if (game.gameOver()) {
            if (board.winner(player1) || board.winner(player2)) {
            alert("Game over! " + player + " wins this round.");
            } else {
              alert("Game over! It's a draw.");
            }
            location.reload();
          }
        } else {
          alert("That space is already occupied")
        }
      });

    }
  };

  // debugger;
  $('.col-md-6').css('width', '540px');
  resizeBoard();
  $('.col-md-6').css('width', '');
  $(window).on('resize', function() {
    resizeBoard();
  });
  $(window).on('resize', (console.log('window')));

});
// - 10
// - 25
function resizeBoard() {
  var width = $('.col-md-6').width();
  $('tr.mark-area').css('height', width/3  );
  $('td.mark-area').css('line-height', (width/3 -25) + 'px');
};

function Game() {
  this.player1 = new Player('X');
  this.player2 = new Player ('O');
  this.board = new Board();
  this.whoseTurn = this.player1;
  this.turnCounter = 0;
}

function Board() {
  this.spaces = [];
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

function Player(playerSymbol) {
  this.mark = playerSymbol;
}

function Space(coordinateX, coordinateY, markedBy) {
  this.x_coordinate = coordinateX;
  this.y_coordinate = coordinateY;
  this.markedBy = markedBy;
}

Space.prototype.mark_by = function(player) {
  if (this.markedBy === ""){
    this.markedBy = player;
  }
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
  if (this.whoseTurn === this.player1) {
    this.whoseTurn = this.player2;
  } else if (this.whoseTurn=== this.player2) {
    this.whoseTurn = this.player1;
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
