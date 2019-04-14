'use strict';

const path = require('path');
const config = require('./conf/webpack.config');
const merge = require('webpack-merge');
const cwd = process.cwd();

const resolve = filePath => path.join(cwd, filePath);
const pkg = require(resolve('./package.json'));

if (!pkg.main) {
  console.log('no pkg.main found, please add a entry in your webpack config!');
}

// const PATHS = {
//   app: resolve(pkg.main), // input
//   build: resolve('dist'), // output
// };

module.exports = merge(config, {
  entry: {
    main: resolve(pkg.main),
  },
});
