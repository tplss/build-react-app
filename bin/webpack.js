#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const resolve = filePath => path.join(cwd, filePath);

// check if has webapck config
const hasConfig = fs.existsSync(resolve('webpack.config.js')) || fs.existsSync(resolve('.webpackrc'));

// if no webpack config, auto-gen!
if (!hasConfig) {
  console.log('no webpack config found, we will create a new one for you!\n');
  const cfg = `
  'use strict';

  const CommonConfigWebpackPlugin = require('common-config-webpack-plugin');
  module.exports = {
    plugins: [ new CommonConfigWebpackPlugin() ],
  };

  `;
  fs.writeFileSync(resolve('webpack.config.js'), cfg, 'utf-8');
}

// run webpack
require('webpack/bin/webpack');
