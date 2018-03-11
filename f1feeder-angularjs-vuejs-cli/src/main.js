/* eslint-disable import/first */

import Vue from 'vue';

// Styling
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

// VueJS
import './filters';

// AngularJS
import 'angular';
import './ajs/app.route';
import appModule from './ajs/app.module';

// Setup vuejs
Vue.config.productionTip = false;

// AngularJS config
appModule.config($locationProvider => {
  $locationProvider.hashPrefix('');
});

// constants
// appModule.constant('appVersion', VERSION);
// appModule.constant('appEnv', ENV);
