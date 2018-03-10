import angular from 'angular';
import autoFocus from './autoFocus';

const moduleName = angular
  .module('myApp.directives', [])
  .directive('autoFocus', autoFocus).name;

export default moduleName;
