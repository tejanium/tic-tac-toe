var path = '../app/models/player'

jest.unmock(path);

var Player = require(path);

describe('player basic winning', () => {
  it('with horizontal line on multiboard', () => {
    //  x | x | x
    // -----------
    //    |   |
    // -----------
    //    |   |

    // player.addTile(0, 0)
    // player.addTile(0, 1)
    // player.addTile(0, 2)


    for(var boardSize=3; boardSize < 10; boardSize++) {
      for(var row=0; row < boardSize; row++) {
        let player = new Player('X')

        for(var col=0; col < boardSize; col++) {
          player.addTile(row, col)
        }

        expect(player.isHorizontallyAlign(boardSize)).toBeTruthy()
        expect(player.isVerticallyAlign(boardSize)).toBeFalsy()
        expect(player.isDiagonallyAlign(boardSize)).toBeFalsy()

        expect(player.isWinner(boardSize)).toBeTruthy()
      }
    }
  });


  it('with vertical line', () => {
    //  x |   |
    // -----------
    //  x |   |
    // -----------
    //  x |   |

    // player.addTile(0, 0)
    // player.addTile(1, 0)
    // player.addTile(2, 0)

    for(var boardSize=3; boardSize < 10; boardSize++) {
      for(var col=0; col < boardSize; col++) {
        let player = new Player('X')

        for(var row=0; row < boardSize; row++) {
          player.addTile(row, col)
        }

        expect(player.isHorizontallyAlign(boardSize)).toBeFalsy()
        expect(player.isVerticallyAlign(boardSize)).toBeTruthy()
        expect(player.isDiagonallyAlign(boardSize)).toBeFalsy()

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

    // player.addTile(0, 0)
    // player.addTile(1, 1)
    // player.addTile(2, 2)

    for(var boardSize = 3; boardSize < 10; boardSize = boardSize + 2) {
      let player = new Player('X')

      for(var row_col=0; row_col < boardSize; row_col++) {
        player.addTile(row_col, row_col)
      }

      expect(player.isHorizontallyAlign(boardSize)).toBeFalsy()
      expect(player.isVerticallyAlign(boardSize)).toBeFalsy()
      expect(player.isDiagonallyAlign(boardSize)).toBeTruthy()

      expect(player.isWinner(boardSize)).toBeTruthy()
    }
  });

  it('with diagonal line', () => {
    //    |   | x
    // -----------
    //    | x |
    // -----------
    //  x |   |

    // player.addTile(0, 2)
    // player.addTile(1, 1)
    // player.addTile(2, 0)

    for(var boardSize = 3; boardSize < 10; boardSize = boardSize + 2) {
      let player = new Player('X')

      for(var i=0; i < boardSize; i++) {
        player.addTile(i, boardSize - i - 1)
      }

      expect(player.isHorizontallyAlign(boardSize)).toBeFalsy()
      expect(player.isVerticallyAlign(boardSize)).toBeFalsy()
      expect(player.isDiagonallyAlign(boardSize)).toBeTruthy()

      expect(player.isWinner(boardSize)).toBeTruthy()
    }
  });
});
