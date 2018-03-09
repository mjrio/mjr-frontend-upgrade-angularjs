const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('./package.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [path.resolve(__dirname, 'app', 'app.ts')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['ng-annotate-loader', 'ts-loader'],
      },
      { test: /\.html$/, exclude: /node_modules/, loader: 'html-loader' },
      { test: /\.png$/, exclude: /node_modules/, loader: 'url-loader?mimetype=image/png' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap!autoprefixer-loader?browsers=last 2 versions',
        }),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: './app/img/', from: '**/*', to: './img' },
      { from: './app/index.html', to: 'index.html' },
    ]),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      moment: 'moment',
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version),
      ENV: JSON.stringify('prod'),
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
    }),
  ],
  externals: {
    jquery: 'jQuery',
    $: 'jquery',
  },
};
