const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = () => {
  const SERVER_PATH = './src/server.js';

  const EXTERNALS = [
    nodeExternals(),
  ];

  return ({
    entry: {
      server: SERVER_PATH,
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js',
    },
    mode: "development",
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: EXTERNALS,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  });
};
