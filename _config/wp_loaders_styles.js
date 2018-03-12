const isProd = process.env.NODE_ENV === 'production';

module.exports = [
  {
    loader : "css-loader",
    options: { sourceMap: !isProd }
  },{
    loader : 'postcss-loader',
    options: {
      plugins: [
        require('autoprefixer')({
          browsers: ['last 3 version']
        })
      ]
    }
  }, {
    loader : "sass-loader",
    options: { sourceMap: !isProd }
  }
]
