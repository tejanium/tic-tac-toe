const React    = require('react');
const ReactDOM = require('react-dom');

const BoardComponent = require('./components/board.js')

const Player = require('./models/player')
const AI     = require('./models/ai')

const DefaultBoardSize = 3

let boardSize = parseInt(window.location.search.replace('?', '')) || DefaultBoardSize
let players   = [new Player('X'), new AI('O')]

ReactDOM.render(
  <BoardComponent boardSize={ boardSize } players={ players } />,
  document.getElementById('container')
);
