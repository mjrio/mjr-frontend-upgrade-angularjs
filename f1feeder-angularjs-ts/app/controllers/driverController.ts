export class DriverController {
  id: string;
  races = [];
  driver = null;

  static $inject = ['$routeParams', 'apiService'];
  constructor(private $routeParams, private apiService) {
    this.id = $routeParams.id;

    apiService.getDriverDetails(this.id).then(data => {
      this.driver = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });

    apiService.getDriverRaces(this.id).then(data => {
      this.races = data.MRData.RaceTable.Races;
    });
  }
}

// $scope version
// export class DriverController {
//   static $inject = ['$scope', '$routeParams', 'apiService'];
//   constructor(private $scope, private $routeParams, private apiService) {
//     console.log('ctrl');
//     $scope.id = $routeParams.id;
//     $scope.races = [];
//     $scope.driver = null;

//     apiService.getDriverDetails($scope.id).then(data => {
//       $scope.driver = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
//     });

//     apiService.getDriverRaces($scope.id).then(data => {
//       $scope.races = data.MRData.RaceTable.Races;
//     });
//   }
// }

// ES6 version
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
