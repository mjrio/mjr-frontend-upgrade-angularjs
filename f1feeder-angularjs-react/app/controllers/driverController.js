export class DriverController {
  constructor($routeParams, apiService) {
    this.$routeParams = $routeParams;
    this.id = $routeParams.id;
    this.races = [];
    this.driver = null;
    this.apiService = apiService;

    apiService.getDriverDetails(this.id).then(data => {
      this.driver = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });

    apiService.getDriverRaces(this.id).then(data => {
      this.races = data.MRData.RaceTable.Races;
    });
  }
}
DriverController.$inject = ['$routeParams', 'apiService'];

// function version
// driverController.$inject = ['$scope', '$routeParams', 'apiService'];
// export default function driverController($scope, $routeParams, apiService) {
//   console.log('ctrl');
//   $scope.id = $routeParams.id;
//   $scope.races = [];
//   $scope.driver = null;

//   apiService.getDriverDetails($scope.id).then(data => {
//     $scope.driver = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
//   });

//   apiService.getDriverRaces($scope.id).then(data => {
//     $scope.races = data.MRData.RaceTable.Races;
//   });
// }
