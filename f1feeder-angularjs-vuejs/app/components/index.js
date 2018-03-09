import angular from 'angular';
import Vue from 'vue';

import Test from './test.vue';

const module = angular
  .module('myApp.components', [])
  .value('Test', Test)
  .directive('hello', createVueComponent => createVueComponent(Vue.component('hello', Test)));

export default module.name;
