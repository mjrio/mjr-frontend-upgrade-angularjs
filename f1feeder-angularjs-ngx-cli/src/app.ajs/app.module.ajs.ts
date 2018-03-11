// routes

import * as angular from 'angular';
import 'angular-route';

import controllersModule from './controllers';
import componentsModule from './app.components';
import directivesModule from './directives';
import filtersModule from './filters';

// combine all modules to create app module
const appModule = angular.module('F1FeederApp', [
  'ngRoute',
  controllersModule,
  directivesModule,
  filtersModule,
  componentsModule,
]);

// config stuff
appModule.config($locationProvider => {
  $locationProvider.hashPrefix('');
});

export default appModule;
