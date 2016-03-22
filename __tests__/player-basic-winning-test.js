var path = '../app/models/player'

jest.unmock(path);

var Player = require(path);

describe('player basic winning', () => {
  it('with vertical line on multiboard', () => {
    //  x | x | x
    // -----------
    //    |   |
    // -----------
    //    |   |

    // player.addTiles(0, 0)
    // player.addTiles(0, 1)
    // player.addTiles(0, 2)


    for(var boardSize=3; boardSize < 10; boardSize++) {
      for(var row=0; row < boardSize; row++) {
        let player = new Player('X')

        for(var col=0; col < boardSize; col++) {
          player.addTiles(row, col)
        }

        expect(player.isWinner(boardSize)).toBeTruthy()
      }
    }
  });


  it('with horizontal line', () => {
    //  x |   |
    // -----------
    //  x |   |
    // -----------
    //  x |   |

    // player.addTiles(0, 0)
    // player.addTiles(1, 0)
    // player.addTiles(2, 0)

    for(var boardSize=3; boardSize < 10; boardSize++) {
      for(var col=0; col < boardSize; col++) {
        let player = new Player('X')

        for(var row=0; row < boardSize; row++) {
          player.addTiles(row, col)
        }

        expect(player.isWinner(boardSize)).toBeTruthy()
      }
    }
  });

  it('with diagonal line', () => {
    //  x |   |
    // -----------
    //    | x |
    // -----------
    //    |   | x

    // player.addTiles(0, 0)
    // player.addTiles(1, 1)
    // player.addTiles(2, 2)

    for(var boardSize=3; boardSize < 10; boardSize++) {
      let player = new Player('X')

      for(var row_col=0; row_col < boardSize; row_col++) {
        player.addTiles(row_col, row_col)
      }

      expect(player.isWinner(boardSize)).toBeTruthy()
    }
  });

  it('with diagonal line', () => {
    //    |   | x
    // -----------
    //    | x |
    // -----------
    //  x |   |

    // player.addTiles(0, 2)
    // player.addTiles(1, 1)
    // player.addTiles(2, 0)

    for(var boardSize=3; boardSize < 10; boardSize++) {
      for(var row=0; row < boardSize; row++) {
        let player = new Player('X')

        for(var col=boardSize - 1; col >= 0; col--) {
          player.addTiles(row, col)
        }

        expect(player.isWinner(boardSize)).toBeTruthy()
      }
    }
  });
});
