// path 는 웹팩에서 사용하는 것
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // style-loader : Creates `style` nodes from JS strings
          // make .css from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // autoprefixer 적용
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
};

