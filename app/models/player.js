class Player {
  constructor(marker) {
    this.marker = marker;
    this.tiles  = []
    this.xs     = {}
    this.ys     = {}
  }

  addTiles(x, y) {
    this.tiles.push([x, y])

    this.xs[x] = (this.xs[x] || 0) + 1
    this.ys[y] = (this.ys[y] || 0) + 1
  }

  isWinner(boardSize) {
    if(this.tiles.length < boardSize)
      return

    return this.isVerticallyAlign(boardSize) ||
           this.isHorizontallyAlign(boardSize) ||
           this.isDiagonallyAlign(boardSize)
  }

  isVerticallyAlign(boardSize) {
    return this.isLining(this.xs, boardSize)
  }

  isHorizontallyAlign(boardSize) {
    return this.isLining(this.ys, boardSize)
  }

  isDiagonallyAlign(boardSize) {
    let x_keys = Object.keys(this.xs).sort()
    let y_keys = Object.keys(this.ys).sort()

    if(x_keys.length < boardSize || y_keys.length < boardSize)
      return

    let center = Math.floor(boardSize / 2)

    return this.isTileExist(center, center) && x_keys.length === y_keys.length && x_keys.every(function(x, index) {
      return y_keys[index] === x
    })
  }

  isTileExist(x, y) {
    return !!this.tiles.find(function(tile) {
      return tile[0] == x && tile[1] == y
    })
  }

  isLining(accumulator, boardSize) {
    for (var key in accumulator) {
      if (accumulator[key] === boardSize) {
        return true
      }
    }
  }
}

module.exports = Player;
