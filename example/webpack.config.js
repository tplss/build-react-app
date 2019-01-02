
'use strict';
const webpackConfig = require('../index');
const merge = require('webpack-merge');

module.exports = mode => {
  if (mode === 'development') {
    return merge(webpackConfig(mode), {
      // todo: fill your own config for development
    });
  }

  return merge(webpackConfig(mode), {
    // todo: fill your own config for production
  });
};
