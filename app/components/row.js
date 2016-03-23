const React = require('react');

const TileComponent = require('./tile')

class RowComponent extends React.Component {
  render() {
    return(
      <div>
        {
          this.props.tiles.map((tile, index) => {
            let tileComponent = <TileComponent key={ index } x={ this.props.x } y={ index } tile={ tile } currentPlayer={ this.props.currentPlayer } />

            tile[2] = tileComponent

            return tileComponent
          })
        }
      </div>
    )
  }
}

module.exports = RowComponent;
