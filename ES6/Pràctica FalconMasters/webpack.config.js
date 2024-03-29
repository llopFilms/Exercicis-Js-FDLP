

const path = require('path');

module.exports = {

  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './js')
  },

  mode:"development",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};