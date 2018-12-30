
# build-react-app

> one command to build react app (just like create-react-app)

## Install

```bash
$ npm install tplss/build-react-app -g
```

## Usage
```bash
$ cd /path/to/your-react-app
$ build-react-app --env production
```

## Configure

being as the same as webpack, add a `webpack.config.js`:

```js
const webpackConfig = require('build-react-app');
const merge = require('webpack-merge');

module.exports = merge(webpackConfig, {
  // todo: fill your own config
});
```


## Features

+ ES6+ (+stage-3)
+ jsx
+ sass
