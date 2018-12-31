'use strict';

const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const resolve = filePath => path.join(cwd, filePath);

const hasConfig = fs.existsSync(resolve('webpack.config.js')) || fs.existsSync(resolve('.webpackrc'));

if (!hasConfig) {
  console.log('no webpack config found, we will create a new one for you!\n');
  const cfg = 'module.exports = require(\'build-react-app\');';
  fs.writeFileSync(resolve('webpack.config.js'), cfg, 'utf-8');
}

