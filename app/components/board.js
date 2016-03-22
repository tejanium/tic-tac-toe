const React = require('react');

const RowComponent = require('./row')

const Player = require('../models/player')

class BoardComponent extends React.Component {
  constructor() {
    super();

    this.boardSize = 3
    this.tiles     = []

    this.state = {
      players: [
        new Player('X'),
        new Player('O')
      ]
    }

    for(var x = 0; x < this.boardSize; x++) {
      this.tiles[x] = []

      for(var y = 0; y < this.boardSize; y++) {
        this.tiles[x][y] = [x, y]
      }
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

  checkWinner() {
    this.state.players.forEach((player) => {
      if(player.isWinner(this.boardSize)) {
        alert(`Player ${ player.marker } won`)
      }
    })
  }

  componentDidUpdate() {
    this.checkWinner()
  }

  render() {
    return(
      <div className='board'>
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
