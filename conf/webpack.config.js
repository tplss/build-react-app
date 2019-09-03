'use strict';

const CommonConfigWebpackPlugin = require('common-config-webpack-plugin');
module.exports = {
  mode: 'production',
  plugins: [ new CommonConfigWebpackPlugin() ],
};

