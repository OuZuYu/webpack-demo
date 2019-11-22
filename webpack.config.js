const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
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
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 限制图片大小为 10000B，小于将会把图片转换为 base64格式
              limit: 10000,

              // images/[图片名].[hash].[图片格式]
              name: 'images/[name].[hash].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    }),
    new ExtractTextPlugin('index.css'),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('1.0.0')
    }),
    new webpack.ProvidePlugin({
      _throttle: ['lodash', 'throttle']
    })
  ],
  resolve: {
    alias: {
      '#': path.resolve(__dirname, 'styles')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'initial' // all || initial 都可分离出 入口文件中的 'lodash.get' 参考： https://www.cnblogs.com/kwzm/p/10314438.html
    },
    runtimeChunk: true
  }
}