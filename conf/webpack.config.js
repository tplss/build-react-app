'use strict';

const CommonConfigWebpackPlugin = require('common-config-webpack-plugin');
module.exports = function(env) {
  return {
    mode: env,
    plugins: [ new CommonConfigWebpackPlugin() ],
  };
};

