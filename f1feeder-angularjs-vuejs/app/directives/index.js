import angular from 'angular';
import autoFocus from './autoFocus';

const module = angular
  .module('myApp.directives', [])
  .directive('autoFocus', autoFocus);

export default module.name;
