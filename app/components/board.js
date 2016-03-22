const React = require('react');

const RowComponent = require('./row')

const Player = require('../models/player')

class BoardComponent extends React.Component {
  constructor() {
    super();

    this.boardSize = 3
    this.tiles     = []

    this.state = this.newState()
    this.state.move = 1

    for(var x = 0; x < this.boardSize; x++) {
      this.tiles[x] = []

      for(var y = 0; y < this.boardSize; y++) {
        this.tiles[x][y] = [x, y]
      }
    }
  }

  newState() {
    return {
      players: [new Player('X'), new Player('O')],
      key: Date.now(),
      move: 0
    }
  }

  alternatePlayer() {
    let players = this.state.players;

    players.unshift(players.pop());

    this.setState({ players: players })
  }

  currentPlayer() {
    this.alternatePlayer();

    return this.state.players[1];
  }

  checkDraw() {
    if(this.state.move == Math.pow(this.boardSize, 2)) {
      if(confirm(`Draw. Reset game?`)) {
        this.resetGame()
      }
    }
  }

  resetGame() {
    this.setState(this.newState())
  }

  checkWinner() {
    this.state.players.forEach((player) => {
      if(player.isWinner(this.boardSize)) {
        if(confirm(`Player ${ player.marker } won. Reset game?`)) {
          this.resetGame()
        }
      }
    })
  }

  componentDidUpdate() {
    this.checkWinner()
    this.checkDraw()

    this.state.move = this.state.move + 1
  }

  render() {
    return(
      <div className='board' key={ this.state.key }>
        {
          this.tiles.map((tiles, index) => {
            return <RowComponent key={ index } x={ index } tiles={ tiles } currentPlayer={ this.currentPlayer.bind(this) }/>
          })
        }
      </div>
    )
  }
}

module.exports = BoardComponent;
