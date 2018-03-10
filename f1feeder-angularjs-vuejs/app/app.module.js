import angular from 'angular';
import 'angular-route';
import 'ngVue';
import 'angular-async-await';

import controllersModule from './controllers';
import directivesModule from './directives';
import filtersModule from './filters';
import componentsModule from './vuejs/components';
import './vuejs/filters';

// combine all modules to create app module
export default angular.module('F1FeederApp', [
  'ngRoute',
  'ngVue',
  'angular-async-await',
  controllersModule,
  directivesModule,
  filtersModule,
  componentsModule,
]);
