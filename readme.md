
# @tplss/build-react-app

> one command to build react app (just like create-react-app)

## Install

```bash
$ npm install @tplss/build-react-app -g
```

## Usage
```bash
$ cd /path/to/your-react-app
$ build-react-app
```

## Configure

just like webpack, add a `webpack.config.js`:

```js
'use strict';

const CommonConfigWebpackPlugin = require('common-config-webpack-plugin');
module.exports = {
  plugins: [ new CommonConfigWebpackPlugin() ],
};
```


## Features

+ ES6+ (+stage-3)
+ jsx
+ sass
