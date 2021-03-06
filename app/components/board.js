const React = require('react');

const RowComponent = require('./row')

class BoardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.tiles = []

    this.state = this.newState()
    this.state.move = 1
    this.state.players = this.props.players

    for(var x = 0; x < this.props.boardSize; x++) {
      this.tiles[x] = []

      for(var y = 0; y < this.props.boardSize; y++) {
        this.tiles[x][y] = [x, y, undefined]
      }
    }
  }

  newState() {
    return {
      key: Date.now(),
      move: 0
    }
  }

  nextMove() {
    if(this.ended)
      return

    let players = this.state.players;

    players.unshift(players.pop());

    this.setState({ players: players }, () => {
      this.currentPlayer().move(this);
    })
  }

  currentPlayer() {
    return this.state.players[0];
  }

  checkDraw() {
    if(!this.allTilesAreFilled())
      return false

    if(confirm(`Draw. Reset game?`)) {
      this.resetGame()
    }else{
      this.ended = true
    }
  }

  resetGame() {
    this.state.players.forEach((player) => {
      player.reset()
    })

    this.setState(this.newState())
  }

  getTile(x, y) {
    return this.tiles[x][y][2]
  }

  allTilesAreFilled() {
    return this.state.move == Math.pow(this.props.boardSize, 2)
  }

  checkWinner() {
    this.state.players.forEach((player) => {
      if(player.isWinner(this.props.boardSize)) {
        if(confirm(`Player ${ player.marker } won. Reset game?`)) {
          this.resetGame()
        }else{
          this.ended = true
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
            return <RowComponent
              key={ index }
              x={ index }
              tiles={ tiles }
              board={ this } />
          })
        }
      </div>
    )
  }
}

module.exports = BoardComponent;
