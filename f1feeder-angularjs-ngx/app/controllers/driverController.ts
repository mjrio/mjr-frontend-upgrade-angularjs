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
