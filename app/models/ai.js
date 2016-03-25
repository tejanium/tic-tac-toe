const Player = require('../models/player')

class AI extends Player {
  move(board) {
    let tile = this.determineBestMove(board)

    if(tile) {
      this.markTile(tile[2])
    }
  }

  determineBestMove(board) {
    let emptyTiles  = this.getEmptyTiles(board, board.state.players)

    // instant win
    let instatWin = emptyTiles.find((tile) => {
      return this.simulateWinning(tile[0], tile[1], board, this)
    })

    if(instatWin)
      return instatWin

    // block others
    let blockWin = emptyTiles.find((tile) => {
      return this.someoneWin(tile[0], tile[1], board)
    })

    if(blockWin)
      return blockWin

    // if center available, take center
    let boardCenter = Math.floor(board.props.boardSize / 2)
    let centerTile = emptyTiles.find(function(tile) {
      return tile[0] == boardCenter && tile[1] == boardCenter
    })

    if(centerTile) {
      return centerTile
    }

    // if corner available, take corner
    let boardMax = board.props.boardSize - 1
    let corners = emptyTiles.filter(function(tile) {
      return tile[0] == 0 && tile[1] == 0 ||
             tile[0] == 0 && tile[1] == boardMax ||
             tile[0] == boardMax && tile[1] == 0 ||
             tile[0] == boardMax && tile[1] == boardMax
    })

    if(corners.length) {
      return this.getRandom(corners)
    }

    // incremental move
    let maxX = this.maxValue(this.xs)
    let maxY = this.maxValue(this.ys)

    let incerementalMove = emptyTiles.find((tile) => {
      if(maxX > maxY) {
        return tile[0] == maxX
      }else{
        return tile[1] == maxY
      }
    })

    if(incerementalMove)
      return incerementalMove

    // In the end it doesn't even matter
    return this.getRandom(emptyTiles)
  }

  getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  maxValue(object) {
    let max = 0

    for (var key in object) {
      if (object[key] > max) {
        max = key
      }
    }

    return max
  }

  someoneWin(x, y, board) {
    return board.state.players.some((player) => {
      return this.simulateWinning(x, y, board, player)
    })
  }

  simulateWinning(x, y, board, player) {
    let clone = player.clone()

    clone.addTile(x, y)

    return clone.isWinner(board.props.boardSize)
  }

  getEmptyTiles(board, players) {
    let playerTiles = players.reduce(function(acc, player) {
      acc.concat(player.tiles)

      return acc
    }, [])

    return board.tiles.reduce(function(acc, row) {
      return row.filter(function(tile) {
        playerTiles.find(function(playerTile) {
          return playerTile[0] == tile[0] && playerTile[1] == tile[1]
        })

        return !tile[2].state.marked
      }).concat(acc)
    }, [])
  }
}

module.exports = AI;
