
'use strict';

const path = require('path');
const CommonConfigWebpackPlugin = require('common-config-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, 'src/index.js'),
  },
  plugins: [ new CommonConfigWebpackPlugin() ],
};

