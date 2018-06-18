import angular from 'angular';
import 'angular-route';

import componentsModule from './components';
import controllersModule from './controllers';
import directivesModule from './directives';
import filtersModule from './filters';
import servicesModule from './services';

// combine all modules to create app module
export default angular.module('F1FeederApp', [
  'ngRoute',
  componentsModule,
  controllersModule,
  directivesModule,
  filtersModule,
  servicesModule,
]);
