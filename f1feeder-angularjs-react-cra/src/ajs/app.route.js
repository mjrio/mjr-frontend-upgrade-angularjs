import appModule from './app.module';

appModule.config([
  '$routeProvider',
  $routeProvider => {
    $routeProvider
      .when('/drivers', {
        template: require('./controllers/drivers.html'),
        controller: 'driversController',
        controllerAs: '$ctrl',
      })
      .when('/drivers/:id', {
        template: '<driver-overview id="id"></driver-overview>',
        controller: [
          '$routeParams',
          '$scope',
          function ($routeParams, $scope) {
            $scope.id = $routeParams.id;
          },
        ],
      })
      .otherwise({ redirectTo: '/drivers' });
  },
]);
