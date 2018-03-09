import appModule from './app.module';

appModule.config([
  '$routeProvider',
  $routeProvider => {
    $routeProvider
      .when('/drivers', {
        template: require('./controllers/drivers.html'),
        controller: 'driversController',
        controllerAs: 'ctrl',
      })
      .when('/drivers/:id', {
        template: require('./controllers/driver.html'),
        controller: 'driverController',
        controllerAs: 'ctrl',
      })
      .otherwise({ redirectTo: '/drivers' });
  },
]);
