'use strict';
let path = require('path');
let webpack = require('webpack');
let ngtools = require('@ngtools/webpack');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

let helpers = require('./helpers');


module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'bootstrap': './src/bootstrap.aot.ts',
  },

  output: {
    path: './bin',
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=images/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './',
      entryModule: './src/main#MainModule'
    }),
    // new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(process.cwd(), 'src')
    )
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.ts', '.js']
  },

  devtool: "#source-map"
};