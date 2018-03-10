import log from 'loglevel';
import apiService from '../core/services/apiService';

export class DriversController {
  constructor($q) {
    this.nameFilter = null;
    this.driversList = [];

    log.info('loading driver (AngularJS)');

    // with $http service
    // apiService.getDrivers().then(data => {
    //   // Digging into the response to get the relevant data
    //   this.driversList = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    // });

    // with axias http service (with ES6 promise)
    $q.when(apiService.getDrivers()).then(drivers => {
      this.driversList = drivers;
    });

    // rebind function so we can access it via the template
    this.searchFilter = this.searchFilter.bind(this);
  }

  searchFilter(driver) {
    const re = new RegExp(this.nameFilter, 'i');
    return (
      !this.nameFilter ||
      re.test(driver.Driver.givenName) ||
      re.test(driver.Driver.familyName)
    );
  }
}

DriversController.$inject = ['$q'];
