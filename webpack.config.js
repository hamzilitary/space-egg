const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devserver: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin(),
  ]
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
