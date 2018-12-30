'use strict';

const path = require('path');
const { commonConfig, developmentConfig, productionConfig } = require('./webpack.config');
const merge = require('webpack-merge');
const cwd = process.cwd();

const resolve = filePath => path.join(cwd, filePath);
const pkg = require(resolve('./package.json'));

const PATHS = {
  app: resolve(pkg.main), // input
  build: resolve('dist'), // output
};

module.exports = mode => {
  if (mode === 'development') {
    return merge(commonConfig(PATHS), developmentConfig(PATHS), { mode });
  }

  return merge(commonConfig(PATHS), productionConfig(PATHS), { mode });
};
