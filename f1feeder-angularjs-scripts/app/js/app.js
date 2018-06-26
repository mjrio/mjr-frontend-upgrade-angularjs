angular
  .module('F1FeederApp', [
    'F1FeederApp.services',
    'F1FeederApp.controllers',
    'F1FeederApp.filters',
    'F1FeederApp.directives',
    'ngRoute',
  ])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/drivers', {
          templateUrl: 'partials/drivers.html',
          controller: 'driversController',
        })
        .when('/drivers/:id', {
          templateUrl: 'partials/driver.html',
          controller: 'driverController',
        })
        .otherwise({ redirectTo: '/drivers' });
    },
  ]);
