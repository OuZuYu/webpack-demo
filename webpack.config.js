const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        /* use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ] */
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader',
          ]
        })
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    }),
    new ExtractTextPlugin('index.css')
  ]
}