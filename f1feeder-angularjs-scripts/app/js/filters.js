'use strict';

/* Filters */

angular
  .module('myApp.filters', [])
  .filter('ordinal', function ordinal() {
    // Ordinal filter
    // {{ 25 | ordinal }}   =>  25th
    return function(number) {
      if (isNaN(number) || number < 1) {
        return number;
      }
      var lastDigit = number % 10;
      if (lastDigit === 1) {
        return number + 'st';
      }
      if (lastDigit === 2) {
        return number + 'nd';
      }
      if (lastDigit === 3) {
        return number + 'rd';
      }
      if (lastDigit > 3) {
        return number + 'th';
      }
    };
  })
  .filter('myDate', [
    '$filter',
    function myDateFilter($filter) {
      // myDate filter
      // {{ date | myDate }}   =>  12 may 2018
      return function(date) {
        if (!(date instanceof Date)) {
          return date;
        }
        return $filter('date')(date, 'dd MMM yyyy');
      };
    },
  ]);
