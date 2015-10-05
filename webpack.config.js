var path    = require('path');
var webpack = require('webpack');

module.exports = {
  quiet:    true,
  context:  path.join(__dirname, 'app'),
  entry:    [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'app', 'main.js')
  ],

  resolve: {
    root:       path.join(__dirname, 'app'),
    extensions: ['', '.js', '.jsx']
  },

  // plugins: [
  //   new webpack.HotModuleReplacementPlugin() // Only use me if the --hot flag isn't in use
  // ],

  output:   {
    path:       path.join(__dirname, 'build'),
    publicPath: '/',
    filename:   'app.js'
  },

  module:   {
    loaders:  [
      {
        test:     /\.scss$/,
        loaders:  ['style', 'css', 'sass']
      },
      {
        test:     /\.jsx?$/,
        exclude:  /node_modules/,
        loader:   'react-hot'
      },
      {
        test:     /\.jsx?$/,
        exclude:  /node_modules/,
        loader:   'babel',
        query:    {
          optional: [
            'runtime',
            'es7.asyncFunctions',
            'es7.decorators',
            'es7.classProperties'
          ]
        }
      }
    ]
  }
};