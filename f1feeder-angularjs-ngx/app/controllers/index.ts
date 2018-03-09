import angular from 'angular';
import { DriversController } from './driversController';
import { DriverController } from './driverController';

const moduleName = angular
  .module('myApp.controllers', [])
  .controller('driversController', DriversController)
  .controller('driverController', DriverController).name;

export default moduleName;
