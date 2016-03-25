const React = require('react');

const TileComponent = require('./tile')

class RowComponent extends React.Component {
  render() {
    return(
      <div>
        {
          this.props.tiles.map((tile, index) => {
            return <TileComponent key={ index }
                                  x={ this.props.x }
                                  y={ index }
                                  tile={ tile }
                                  board={ this.props.board } />
          })
        }
      </div>
    )
  }
}

module.exports = RowComponent;
