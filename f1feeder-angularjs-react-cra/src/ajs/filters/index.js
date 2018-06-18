import angular from 'angular';
import { myDateFilter } from './myDate';
import { ordinalFilter } from './ordinal';

const filterModule = angular
  .module('myApp.filters', [])
  .filter('myDate', myDateFilter)
  .filter('ordinal', ordinalFilter);

export default filterModule.name;
