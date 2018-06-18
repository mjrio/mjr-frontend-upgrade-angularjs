// import angular from 'angular';
// import { myDateFilter } from './myDate';
// import { ordinalFilter } from './ordinal';

// const filterModule = angular
//   .module('myApp.filters', [])
//   .filter('myDate', myDateFilter)
//   .filter('ordinal', ordinalFilter);

// export default filterModule.name;

import angular from 'angular';
import dateFormatter from '../../core/formatters/date.formatter';
import ordinalFormatter from '../../core/formatters/ordinal.formatter';
import currencyFormatter from '../../core/formatters/currency.formatter';

const filterModule = angular
  .module('myApp.filters', [])
  .filter('myDate', () => dateFormatter)
  .filter('ordinal', () => ordinalFormatter)
  .filter('currency', () => currencyFormatter);

export default filterModule.name;
