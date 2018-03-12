const
merge     = require('webpack-merge'),
path      = require('path'),
wp_common = require('./_config/wp_common'),
wp_plugins= require('./_config/wp_plugins'),
isProd    = process.env.NODE_ENV === 'production';

module.exports = merge.smart(wp_common, {
  output: {
  	path      : path.resolve(__dirname, './dist'),
    publicPath: isProd ? '' : 'http://localhost:8080/',
    filename  : '[name].[hash].js'
  },
  plugins: wp_plugins(isProd)
});