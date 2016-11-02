var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'tago/server/static/build');
var APP_DIR = path.resolve(__dirname, 'ui/scripts');

module.exports = {
  entry: {
    app: APP_DIR + '/index.jsx',
    vendors: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: 'http://localhost:8090/assets',
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-1', 'react'],
        },
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js',
      minChunks: 2,
    }),
  ],
};
