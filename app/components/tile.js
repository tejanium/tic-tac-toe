const React = require('react');

class TileComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      mark: '',
      marked: false
    }
  }

  setMark(marker) {
    if(!this.state.marked) {
      this.setState({ mark: marker, marked: true })

      this.props.board.nextMove()
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
      <div style={ style } onClick={ () => this.props.board.currentPlayer().markTile(this) }>
        <h1>{ this.state.mark }</h1>
      </div>
    )
  }
}

module.exports = TileComponent;
