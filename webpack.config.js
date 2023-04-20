const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './client/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  
  // mode: 'production',
  mode: 'development',

  module: {
    rules: [ 
      { 
        test: /\.jsx?/, 
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      } 
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(
        {
          title: 'Development',
          template: 'index.html'
        }
      ),
  ],

  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, '')
    }
  },

  // proxy: {
  //   '/api': 'http://localhost:3000'
  // }

};