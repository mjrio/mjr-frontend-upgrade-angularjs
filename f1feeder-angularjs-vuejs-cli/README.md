# F1FeederApp-Vuejs - AngularJS Upgrade to VueJS

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

## Using ngVue

- Start from a new @vue/cli@3.0.0 project

  - ESLint or TSLint
  - Karma & Jest (preferable)
  - ES6 or Typescript

- Add angular & angular-route

- Add vue, ngVue & html-loader (vuejs/angularjs integration)

- Add support libraries

  - Add prettier, eslint-config-prettier
  - Add axios (for http)
  - Add loglevel (for logging)
  - Add luxon or datefns (for Date parsing/formatting)

- Copy over the AngularJS application (see asj folder)

- Update main.js to add AngularJS bootstrapping

```js
// main.js
import 'angular';
import './ajs/app.route';
import appModule from './ajs/app.module';

appModule.config($locationProvider => {
  $locationProvider.hashPrefix('');
});
```

- Add the `ngVue` module to AngularJS

```js
import angular from 'angular';
import 'angular-route';
import 'ngVue';

export default angular.module('F1FeederApp', [
  'ngRoute',
  'ngVue',
  ...
])
```

- Update index.html to add Angular bootstrapping

```html
<body ng-app="myApp">
  <div class="container">
    <ng-view></ng-view>
  </div>
  <!-- built files will be auto injected -->
</body>
```

- Register your vue components to AngularJS

```js
import angular from 'angular';
import Vue from 'vue';

import MyComponent from '../components/myComponent.vue';

const module = angular
  .module('myApp.components', \[])
  .directive('myComponent', createVueComponent =>
    createVueComponent(Vue.component('myComponent', MyComponent)),
  );

export default module.name;
```

- put all your static assets in the public folder
