import angular from 'angular';
import autoFocus from './autoFocus';
import interpolate from './interpolate';

const moduleName = angular
  .module('myApp.directives', [])
  .directive('interpolate', interpolate)
  .directive('autoFocus', autoFocus).name;

export default moduleName;
