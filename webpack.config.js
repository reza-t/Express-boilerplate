const path = require('path');

module.exports = () => {
  const SERVER_PATH = './src/server.js';

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
