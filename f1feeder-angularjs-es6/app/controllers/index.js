import angular from 'angular';
import { DriversController } from './driversController';
import { DriverController } from './driverController';

export default angular
  .module('myApp.controllers', [])
  .controller('driversController', DriversController)
  .controller('driverController', DriverController)
  .name;
