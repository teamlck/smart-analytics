const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './examples/client/app.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: "./examples/client",
    hot: true,
    inline: true,
    progress: true,
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/client/index.html'
    })
  ]
};
