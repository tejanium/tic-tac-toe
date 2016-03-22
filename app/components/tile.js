const React = require('react');

class TileComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      mark: '',
      marked: false
    }
  }

  setMarker() {
    if(!this.state.marked) {
      let currentPlayer = this.props.currentPlayer()

      this.setState({ mark: currentPlayer.marker, marked: true })

      currentPlayer.addTiles(this.props.x, this.props.y)
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
      <div style={ style } onClick={ this.setMarker.bind(this) }>
        <h1>{ this.state.mark }{ this.props.x }, { this.props.y }</h1>
      </div>
    )
  }
}

module.exports = TileComponent;
