var path = '../app/models/player'

jest.unmock(path);

var Player = require(path);

describe('player edge winning', () => {
  it('with horizontal line on multiboard', () => {
    //  x | x | x
    // -----------
    //  x | x |
    // -----------
    //    |   |

    let player = new Player('X')

    player.addTiles(0, 0)
    player.addTiles(0, 1)
    player.addTiles(0, 2)
    player.addTiles(1, 0)
    player.addTiles(1, 1)

    expect(player.isHorizontallyAlign(3)).toBeTruthy()
    expect(player.isVerticallyAlign(3)).toBeFalsy()
    expect(player.isDiagonallyAlign(3)).toBeFalsy()

    expect(player.isWinner(3)).toBeTruthy()
  });


  it('with vertical line', () => {
    //  x | x |
    // -----------
    //  x | x |
    // -----------
    //  x |   |

    // player.addTiles(0, 0)
    // player.addTiles(1, 0)
    // player.addTiles(2, 0)

    let player = new Player('X')

    player.addTiles(0, 0)
    player.addTiles(1, 0)
    player.addTiles(2, 0)
    player.addTiles(0, 1)
    player.addTiles(1, 1)

    expect(player.isHorizontallyAlign(3)).toBeFalsy()
    expect(player.isVerticallyAlign(3)).toBeTruthy()
    expect(player.isDiagonallyAlign(3)).toBeFalsy()

    expect(player.isWinner(3)).toBeTruthy()
  });

  it('with diagonal line', () => {
    //  x |   | x
    // -----------
    //    | x |
    // -----------
    //    |   | x

    let player = new Player('X')

    player.addTiles(0, 0)
    player.addTiles(1, 1)
    player.addTiles(2, 2)
    player.addTiles(0, 2)

    expect(player.isHorizontallyAlign(3)).toBeFalsy()
    expect(player.isVerticallyAlign(3)).toBeFalsy()
    expect(player.isDiagonallyAlign(3)).toBeTruthy()

    expect(player.isWinner(3)).toBeTruthy()
  });

  it('with diagonal line', () => {
    //    |   | x
    // -----------
    //    | x | x
    // -----------
    //  x |   |

    let player = new Player('X')

    player.addTiles(0, 2)
    player.addTiles(1, 1)
    player.addTiles(2, 0)
    player.addTiles(1, 2)

    expect(player.isHorizontallyAlign(3)).toBeFalsy()
    expect(player.isVerticallyAlign(3)).toBeFalsy()
    expect(player.isDiagonallyAlign(3)).toBeTruthy()

    expect(player.isWinner(3)).toBeTruthy()
  });
});
