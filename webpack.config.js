var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: './build/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
};
