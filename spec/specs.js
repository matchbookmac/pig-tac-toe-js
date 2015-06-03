describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.eql("X");
  });
});

describe('Space', function() {
  it("returns the player's mark at a coordinate", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.x_coordinate).to.equal(1);
  });
});
