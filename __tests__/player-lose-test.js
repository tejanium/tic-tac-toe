var path = '../app/models/player'

jest.unmock(path);

var Player = require(path);

describe('player lose', () => {
  it('with near full', () => {
    //  x |   | x
    // -----------
    //  x | x |
    // -----------
    //    | x |

    let player = new Player('X')

    player.addTiles(0, 0)
    player.addTiles(0, 2)
    player.addTiles(1, 0)
    player.addTiles(1, 1)
    player.addTiles(2, 1)

    expect(player.isVerticallyAlign(3)).toBeFalsy()
    expect(player.isHorizontallyAlign(3)).toBeFalsy()
    expect(player.isDiagonallyAlign(3)).toBeFalsy()
    expect(player.isWinner(3)).toBeFalsy()
  });
});
