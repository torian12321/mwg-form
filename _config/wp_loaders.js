const
path       = require('path'),
styles     = require('./wp_loaders_styles'),
ExtractText= require('extract-text-webpack-plugin'),
isProd     = process.env.NODE_ENV === 'production';

module.exports = [
  { test: /\.(jsx|js)$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader', query: {presets: ['react', 'es2015', 'stage-1']}},
  { test: /\.(woff|woff2)$/, loader:'url-loader?prefix=font/&limit=5000' },
  { test: /\.(ttf|otf)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
  { test: /\.json$/, loader: 'json-loader' },
  { test: /\.(mp3|wav)$/, loader: 'url-loader?limit=1' },
  { test: /\.(png|jpg)$/, loader: 'url-loader?limit=25000' },
  {
    test: /\.(css|scss)$/,
    use : isProd ?
      ExtractText.extract({ fallback: 'style-loader', use: styles }) :
      [{loader: "style-loader"}, ...styles]
  }
];