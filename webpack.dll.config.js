const webpack = require('webpack');
const path = require('path');
const package = require('./package.json');

module.exports = {
  entry: {
    vendor: Object.keys(package.dependencies)
  },
  output: {
    path: path.resolve(__dirname, './src/public'),
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '[name]-manifest.json')
    })
  ]
}