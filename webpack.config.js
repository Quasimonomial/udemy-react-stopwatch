var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    "./app/app.jsx"
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss')
    },
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
