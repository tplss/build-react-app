
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
  'use strict';
  const webpackConfig = require('build-react-app');
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
```


## Features

+ ES6+ (+stage-3)
+ jsx
+ sass
