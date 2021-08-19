const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/client/js/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'client',
      type: 'umd',
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Natural Language Processing',
      template: './src/client/views/index.html',
      filename: './index.html',
      favicon: './src/client/img/favicon.ico',
    }),
    new MiniCssExtractPlugin(),
  ],
};
