const path = require('path');

const common = {
  mode: 'development',
  context: path.resolve(__dirname, 'client'),
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const client = {
  entry: './client.js',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
};

const server = {
  entry: './server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle-server.js',
    libraryTarget: 'commonjs-module',
  },
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server),
];
