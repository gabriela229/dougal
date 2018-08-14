const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader']},
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['GOOGLE_MAPS_KEY'])
  ]
};
if (process.env.NODE_ENV !== 'production') require('./secrets.js');
// if (process.env.NODE_ENV === 'production'){
//   process.env.key = JSON.parse(process.env.key);
// }
