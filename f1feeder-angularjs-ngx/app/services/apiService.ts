export class ApiService {
  static $inject = ['$http'];
  constructor(private $http: ng.IHttpService) {}

  // https://medium.com/@alSkachkov/using-async-await-function-in-angular-1-5-babel-6-387f7c43948c
  // https://www.npmjs.com/package/angular-async-await
  /*
    async testAsync() {
       await this.$timeout(2000);
       this.text = "Changed";
       $scope.$digest(); <-- This is now much faster :)
    }
*/


  getDrivers() {
    return this.$http({
      method: 'GET',
      url: 'http://ergast.com/api/f1/2013/driverStandings.json',
    }).then(response => {
      return response.data;
    });
  }

  getDriverDetails(id) {
    return this.$http({
      method: 'GET',
      url: `http://ergast.com/api/f1/2013/drivers/${id}/driverStandings.json`,
    }).then(response => {
      return response.data;
    });
  }

  getDriverRaces(id) {
    return this.$http({
      method: 'GET',
      url: `http://ergast.com/api/f1/2013/drivers/${id}/results.json`,
    }).then(response => {
      return response.data;
    });
  }
}
