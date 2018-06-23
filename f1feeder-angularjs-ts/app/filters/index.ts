import angular from 'angular';
import { myDateFilter } from './myDate';
import { ordinalFilter } from './ordinal';

export default angular
  .module('myApp.filters', [])
  .filter('myDate', myDateFilter)
  .filter('ordinal', ordinalFilter)
  .name;
