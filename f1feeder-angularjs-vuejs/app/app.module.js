import angular from 'angular';
import 'angular-route';
import 'ngVue';

import controllersModule from './controllers';
import directivesModule from './directives';
import filtersModule from './filters';
import servicesModule from './services';
import componentsModule from './components';

// combine all modules to create app module
export default angular.module('F1FeederApp', [
  'ngRoute',
  'ngVue',
  controllersModule,
  directivesModule,
  filtersModule,
  servicesModule,
  componentsModule,
]);
