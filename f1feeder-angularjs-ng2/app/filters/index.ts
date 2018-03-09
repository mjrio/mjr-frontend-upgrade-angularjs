import angular from 'angular';
import { interpolate } from './interpolate';
import { checkMark } from './checkMark';

const moduleName = angular
  .module('myApp.filters', [])
  .filter('interpolate', interpolate)
  .filter('checkmark', checkMark).name;

export default moduleName;
