// vue.config.js


module.exports = {

    publicPath: process.env.NODE_ENV === 'production'
    ? '/bridge-africa/'
    : '/',

    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== 'production',
        extract:true
      }
  }
  