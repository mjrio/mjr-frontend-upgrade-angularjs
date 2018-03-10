# F1FeederApp-ES6 - AngularJS Upgrade

## Getting Started

Commands:

```bash
# install dependencies (required)
yarn

# start the app (http://localhost:8080)
yarn serve

# build the app
yarn build
yarn build:prod
```

## Upgrade to npm, bundeling,formatting and linting

### Migrate from bower to npm

* Remove bower & bower_components
* Add angular & angular-router with npm

```bash
yarn add angular angular-router
# or npm install angular angular-router
```

### Add babel

We need this to suppport ESM module (and all ES6+ goodies) support

```bash
yarn add babel-core@6.26.0 babel-preset-env
```

add .babelrc

```json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["last 2 versions", "safari >= 7"]
        }
      }
    ]
  ]
}
```

### Add webpack for bundeling

```
yarn add webpack@3.10.0 webpack-dev-server@2.7.1 style-loader url-loader babel-loader css-loader autoprefixer-loader copy-webpack-plugin extract-text-webpack-plugin
```

add `webpack.config.js`

```js
// simple webpack.config.js
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve('app/js', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loader: 'css-loader' },
    ],
  },
};
```

Update index.html to match webpack bundle file

```html
<!DOCTYPE html>
<html>
<head>
  <title>F-1 Feeder</title>
</head>

<body ng-app="F1FeederApp">
  <ng-view></ng-view>
  <script src="bundle.js"></script>
</body>
</html>
```

### Use ESLint in favor of jslint

* remove jslint and dependencies
* add eslint and dependecies

```bash
yarn add eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import --dev
```

```json
{
  "extends": ["airbnb-base", "prettier"],
  "globals": {
    "angular": true
  },
  "env": {
    "browser": true
  },
  "rules": {
    "no-console": [0, ""]
  }
}
```

to lint all files

```bash
npx eslint './app/**/*.js'
```

add eslint support to your editor (for example VSCode)

and fix all errors, ignore less important warnings

```
"rules": {
  "no-console": [0, ""],
  "prefer-arrow-callback": [0],
  "prefer-destructuring": [0],
  "no-useless-escape": [0]
  ...
}
```

### Add prettier & .editorconfig for formatting

```bash
yarn add prettier --dev
```

add prettier config file (.prettierrc)

```json
{
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 4,
  "printWidth": 100,
  "useTabs": false,
  "semi": true
}
```

add `.editorconfig` to match prettier format

````
root = true

[*]

# Change these settings to your own preference
indent_style = space
indent_size = 4

# We recommend you to keep these unchanged
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
``

to format all files

```bash
npx prettier --write './**/*.{js,json,css}'
````

### Add npm scripts to launch commands

```json
 "scripts": {
    "serve": "webpack-dev-server",
    "build": "webpack",
    "build:prod": "webpack --config webpack.config.prod.js",
    "lint:app": "eslint './app/**/*.js'",
    "format": "prettier --write './**/*.{js,json,css}'"
}
```

## Upgrade javascript to ESM

Remove all <script> tags from the index.html

Remove all IFFE and 'use strict' (ESM modules will handle this)

Refactor all JS files

## Split app.js and app.module.js

```js
// app.module.js
import angular from 'angular';
import commonModule from './common';
import featuresModule from './features';

// combine all modules to create app module
export default angular.module('app', [commonModule, featuresModule]);
```

```js
import 'angular';
import appModule from './app.module';

// configs
appModule.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

// runs
appModule.run(...)

// constant
appModule.constant('appVersion', VERSION);
appModule.constant('appEnv', ENV);
```

## Split module and services/controllers/filters/...

./controllers/index.js

```js
import angular from 'angular';
import userController from './userController';
import customerController from './customerController';

const module = angular
  .module('My.controllers', [])
  .controller('userController', userController)
  .controller('customerController', customerController);

export default module.name;
```

./controllers/userController.js

```js
userController.$inject[('$scope', '$routeParams', 'userService')];
export default function userController($scope, $routeParams, userService) {
  // implementation
}
```

## Write your services/controllers as classes

```js
export class UserController {
  static $inject = ['$scope', '$routeParams', 'apiService'];
  constructor(private $scope, private $routeParams, private apiService) {
    console.log('ctrl');
  }

  doThis() {
    this.$scope.name = 'hello'
  }

}
```

## Use ControllerAs syntax

```js
export class UserController {
  name: string;

  static $inject = ['$routeParams', 'apiService'];
  constructor(private $routeParams, private apiService) {
    console.log('ctrl');
  }

  doThis() {
    this.name = 'hello'
  }
}
```

```js
.when('/user/:id', {
  template: require('./controllers/user.html'),
  controller: 'userController',
  controllerAs: 'ctrl',
})
```
