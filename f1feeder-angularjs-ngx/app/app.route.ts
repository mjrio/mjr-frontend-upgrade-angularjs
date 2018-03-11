import appModule from './app.module.ajs';

appModule.config([
  '$routeProvider',
  $routeProvider => {
    $routeProvider
      .when('/drivers', {
        template: require('./controllers/drivers.html'),
        controller: 'driversController',
        controllerAs: '$ctrl',
      })

      // AngularJS
      // .when('/drivers/:id', {
      //   template: require('./controllers/driver.html'),
      //   controller: 'driverController',
      //   controllerAs: '$ctrl',
      // })

      // Angular (driver-overview is a Angular component)
      .when('/drivers/:id', {
        template: '<driver-overview :id="id"></driver-overview>',
        controller: [
          '$routeParams',
          '$scope',
          ($routeParams, $scope) => {
            $scope.id = $routeParams.id;
          },
        ],
      })
      .otherwise({ redirectTo: '/drivers' });
  },
]);
