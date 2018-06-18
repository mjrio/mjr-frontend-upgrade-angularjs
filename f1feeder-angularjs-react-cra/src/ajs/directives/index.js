import angular from 'angular';
import autoFocus from './autoFocus';

const directiveModule = angular
  .module('myApp.directives', [])
  .directive('autoFocus', autoFocus);

export default directiveModule.name;
