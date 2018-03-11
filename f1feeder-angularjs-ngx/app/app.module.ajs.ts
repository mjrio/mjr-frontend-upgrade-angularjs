import angular from 'angular';
import 'angular-route';

import controllersModule from './controllers';
import directivesModule from './directives';
import filtersModule from './filters';
import componentsModule from './components';

// combine all modules to create app module
export default angular.module('F1FeederApp', [
  'ngRoute',
  controllersModule,
  directivesModule,
  filtersModule,
  componentsModule,
]);
