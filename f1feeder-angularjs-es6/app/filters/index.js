import angular from 'angular';
import { interpolate } from './interpolate';
import { checkMark } from './checkMark';

const module = angular
  .module('myApp.filters', [])
  .filter('interpolate', interpolate)
  .filter('checkmark', checkMark);

export default module.name;
