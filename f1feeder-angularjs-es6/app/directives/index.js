import angular from 'angular';
import autoFocus from './autoFocus';
import interpolate from './interpolate';

const module = angular
  .module('myApp.directives', [])
  .directive('interpolate', interpolate)
  .directive('autoFocus', autoFocus);

export default module.name;
