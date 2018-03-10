import angular from 'angular';
import { dateFormatter } from '../core/formatters/data.formatter';
import { ordinalFormatter } from '../core/formatters/ordinal.formatter';
import { currencyFormatter } from '../core/formatters/currency.formatter';

const moduleName = angular
  .module('myApp.filters', [])
  .filter('myDate', () => dateFormatter)
  .filter('ordinal', () => ordinalFormatter)
  .filter('currency', () => currencyFormatter).name;

export default moduleName;
