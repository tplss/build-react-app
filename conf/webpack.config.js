'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const babelConfig = require('./babelrc');

exports.commonConfig = PATHS => ({
  entry: PATHS.app,
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
        include: PATHS.app,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({}),
  ],
});

exports.developmentConfig = () => ({
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,

    // display only errors to reduce the amount of output
    stats: 'errors-only',

    // parse host and port from env so this is easy
    // to customize
    host: process.env.HOST,
    port: process.env.PORT,
  },
  module: {
    rules: [
      // Define development specific CSS setup
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
    ],
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
});

exports.productionConfig = PATHS => ({
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  module: {
    rules: [
      // Extract CSS during build
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
        include: PATHS.app,
      },
    ],
  },
  plugins: [
    // Output extracted CSS to a file
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});

