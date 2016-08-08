const React    = require('react');
const ReactDOM = require('react-dom');

const BoardComponent = require('./components/board.js')

const DefaultBoardSize = 3

let boardSize = parseInt(window.location.search.replace('?', '')) || DefaultBoardSize

ReactDOM.render(
  <BoardComponent boardSize={ boardSize } />,
  document.getElementById('container')
);
