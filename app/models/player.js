class Player {
  constructor(marker) {
    this.marker = marker;
    this.tiles  = []
    this.xs     = {}
    this.ys     = {}
  }

  addTile(x, y) {
    this.tiles.push([x, y])

    this.xs[x] = (this.xs[x] || 0) + 1
    this.ys[y] = (this.ys[y] || 0) + 1
  }

  move() {
    // did nothing
  }

  markTile(tile) {
    if(tile.setMark(this.marker)) {
      this.addTile(tile.props.x, tile.props.y)
    }
  }

  isWinner(boardSize) {
    if(this.tiles.length < boardSize)
      return

    return this.isHorizontallyAlign(boardSize) ||
           this.isVerticallyAlign(boardSize) ||
           this.isDiagonallyAlign(boardSize)
  }

  isHorizontallyAlign(boardSize) {
    return this.isLining(this.xs, boardSize)
  }

  isVerticallyAlign(boardSize) {
    return this.isLining(this.ys, boardSize)
  }

  isDiagonallyAlign(boardSize) {
    if(boardSize % 2 == 0)
      return false

    let { diagonal, counterDiagonal } = this.generateDiagonalTiles(boardSize)

    return diagonal.every((tile) => { return this.isTileExist(tile) }) ||
           counterDiagonal.every((tile) => { return this.isTileExist(tile) })
  }

  clone() {
    let clone = new Player(this.marker)

    clone.tiles = this.tiles.slice()
    clone.xs    = Object.assign({}, this.xs)
    clone.ys    = Object.assign({}, this.ys)

    return clone
  }

  generateDiagonalTiles(boardSize) {
    let diagonal        = []
    let counterDiagonal = []

    for(var i=0; i < boardSize; i++) {
      diagonal.push([i, i])
      counterDiagonal.push([i, boardSize - i - 1])
    }

    return { diagonal, counterDiagonal }
  }

  isTileExist([x, y]) {
    return !!this.tiles.find(function([tile_x, tile_y]) {
      return tile_x == x && tile_y == y
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
