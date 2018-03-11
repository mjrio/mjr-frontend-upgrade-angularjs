import log from 'loglevel';
import apiService from '../core/services/apiService';

export class DriversController {
  nameFilter: string = null;
  driversList = [];

  static $inject = ['$q'];
  constructor($q) {
    $q.when(apiService.getDrivers()).then(drivers => {
      this.driversList = drivers;
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
