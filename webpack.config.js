const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
  },

  plugins: [
    // Quando não há "else", pode-se utilizar o "&&"
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
    // Filtrar valores boolean
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              // React fast-refresh
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        },
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  }
};