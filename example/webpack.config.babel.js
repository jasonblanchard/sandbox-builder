import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          'node_modules'
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({ // TODO: Move to separate package
      describe: ['sandbox-builder', 'describe'],
      it: ['sandbox-builder', 'it'],
      expect: ['sandbox-builder', 'expect'],
      jest: ['sandbox-builder', 'jest'],
      beforeEach: ['sandbox-builder', 'beforeEach'],
    })
  ]
}
