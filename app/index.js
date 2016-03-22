const React    = require('react');
const ReactDOM = require('react-dom');

const BoardComponent = require('./components/board.js')

ReactDOM.render(
  <BoardComponent />,
  document.getElementById('container')
);
