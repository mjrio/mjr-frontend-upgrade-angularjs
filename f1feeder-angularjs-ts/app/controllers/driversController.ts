export class DriversController {
  nameFilter: string = null;
  driversList = [];

  static $inject = ['apiService'];
  constructor(apiService) {
    apiService.getDrivers().then(data => {
      // Digging into the response to get the relevant data
      this.driversList = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
    this.searchFilter = this.searchFilter.bind(this);
  }

  searchFilter(driver) {
    const re = new RegExp(this.nameFilter, 'i');
    return (
      !this.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName)
    );
  }
}

// $scope version
// export class DriversController {
//   static $inject = ['$scope', 'apiService'];
//   constructor($scope, apiService) {
//     $scope.nameFilter = null;
//     $scope.driversList = [];
//     $scope.searchFilter = driver => {
//       const re = new RegExp($scope.nameFilter, 'i');
//       return (
//         !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName)
//       );
//     };

//     apiService.getDrivers().then(data => {
//       // Digging into the response to get the relevant data
//       $scope.driversList = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
//     });
//   }
// }

// ES6 version
// driversController.$inject = ['$scope', 'apiService'];
// export default function driversController($scope, apiService) {
//   $scope.nameFilter = null;
//   $scope.driversList = [];
//   $scope.searchFilter = driver => {
//     const re = new RegExp($scope.nameFilter, 'i');
//     return (
//       !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName)
//     );
//   };

//   apiService.getDrivers().then(data => {
//     // Digging into the response to get the relevant data
//     $scope.driversList = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
//   });
// }
