import angular from 'angular';
import { myDateFilter } from './myDate';
import { ordinalFilter } from './ordinal';

const module = angular
  .module('myApp.filters', [])
  .filter('myDate', myDateFilter)
  .filter('ordinal', ordinalFilter);

export default module.name;
