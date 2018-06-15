const webpack = require('webpack');
const path = require('path');
const packageJson = require('./package.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: path.resolve('app', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html$/, exclude: /node_modules/, loader: 'html-loader' },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'url-loader?mimetype=image/png',
      },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: './app/assets/img/', from: '**/*', to: './assets/img' },
      { from: './app/index.html', to: 'index.html' },
    ]),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version),
      ENV: JSON.stringify('dev'),
    }),
  ],
  externals: {
    jquery: 'jQuery',
    $: 'jquery',
  },
};
