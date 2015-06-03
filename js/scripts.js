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
