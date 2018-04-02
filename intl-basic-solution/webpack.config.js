const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    client: './client/entry.jsx'
  },
  output: {
    path: path.join(__dirname, 'app', 'public'),

    // Name of the output file
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'public/'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-gb|de|es|it|fr/),
    // new CompressionPlugin(),
    // new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};
