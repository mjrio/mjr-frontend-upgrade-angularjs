// import angular from 'angular';
// import { myDateFilter } from './myDate';
// import { ordinalFilter } from './ordinal';

// export default angular
//   .module('myApp.filters', [])
//   .filter('myDate', myDateFilter)
//   .filter('ordinal', ordinalFilter)
//   .name;

import angular from 'angular';
import dateFormatter from '../../core/formatters/date.formatter';
import ordinalFormatter from '../../core/formatters/ordinal.formatter';
import currencyFormatter from '../../core/formatters/currency.formatter';

export default angular
  .module('myApp.filters', [])
  .filter('myDate', () => dateFormatter)
  .filter('ordinal', () => ordinalFormatter)
  .filter('currency', () => currencyFormatter)
  .name;
