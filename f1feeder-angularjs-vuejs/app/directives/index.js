import angular from 'angular';
import autoFocus from './autoFocus';

export default angular
  .module('myApp.directives', [])
  .directive('autoFocus', autoFocus)
  .name;
