const React = require('react');

class TileComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      mark: '',
      marked: false
    }
  }

  setMark(player) {
    if(!this.state.marked) {
      this.setState({ mark: player.marker, marked: true })

      player.addTiles(this.props.x, this.props.y)
    }
  }

  render() {
    let style = {
      width:  '100px',
      height: '100px',
      border: '1px solid',
      margin: '1px',
      display: 'inline-block',
      'verticalAlign': 'top',
      'textAlign': 'center'
    }

    return(
      <div style={ style } onClick={ () => this.setMark(this.props.currentPlayer()) }>
        <h1>{ this.state.mark }</h1>
      </div>
    )
  }
}

module.exports = TileComponent;
