# F1FeederApp-ES6 - AngularJS Upgrade to React

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

## Add React to AngularJS application

### Install & setup React

Install react & support libraries

```bash
yarn add react2angular ngimport react react-dom prop-types
```

Upgrade ESLint config to suport react & jsx

```bash
yarn remove eslint-config-airbnb-base
yarn add eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react --dev
yarn add babel-preset-stage-3 --dev  # for spread-operator
yarn add @types/prop-types  @types/react @types/react-dom --dev
```

```js
{
  "extends": ["airbnb", "prettier"],
  ...
}
```

### Write your first react component

```js
// myComponent.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <p>FooBar: {this.props.fooBar}</p>
        <p>Baz: {this.props.baz}</p>
      </div>
    );
  }
}

// proptypes
MyComponent.propTypes = {
  fooBar: PropTypes.number.isRequired,
  baz: PropTypes.string.isRequired,
};
```

Register the react component as AngularJS component

```js
import MyComponent from './myComponent';
const module = angular
  .module('myApp.components', [])
  .component('myComponent', MyComponent);
```

Extend webpack to handle jsx files

```js
module.exports = {
    module: {
        rules: [
            // match js & jsx files
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
        //  ...
        ]
        // ...
    }
    resolve: {
        // make import find jsx files
        extensions: ['', '.js', '.jsx'],
    },
}
```

Extend .babelrc to support jsx & other new ES features

```json
{
  "presets": [
    "env",
    "react", // for JSX
    "stage-3" // for spread operator, often used in react
  ]
}
```

### Using AngularJS services

Register ngImport

```js
angular.module('myApp', [
  'ngRoute',
  'bcherny/ngimport',
  // ...
]);
```

```js
// myComponent.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { $http, $log } from 'ngimport';

export default class MyComponent extends Component {
  state = {
    data: '',
  };
  componentDidMount() {
    $http.get('/path').then(res => {
      $log.info('Got data!', res.data);
      this.setState({ data: res.data });
    });
  }
  render() {
    return <div>{this.state.data}</div>;
  }
}
```

### Using legacy services in React

User service

```js
// user.service.js
export default function userService($http) {
  this.getAll = function() {
    return $http.get('/url');
  };
}

// app.module.js
import userService from './user.service.js';
angular.module('myApp', []).service('userService', userService);
```

Expose the legacy service as follows

```js
// my.service.js
import { module } from 'angular';
export let userService = undefined;

module('myModule').run(function($injector) {
  userService = $injector.get('userService');
});
```

And use it in React component

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { userService } from './user.service';

export default class MyComponent extends Component {
  state = {
    data: '',
  };
  componentDidMount() {
    userService.getAll().then(users => {
      this.setState({ data: users });
    });
  }
  render() {
    return <div>{this.state.data}</div>;
  }
}
```

## Resources

* [react2angular](https://github.com/coatue-oss/react2angular)
* [ngImport](https://github.com/bcherny/ngimport)
