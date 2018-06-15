import angular from 'angular';
import { DriversController } from './driversController';
import { DriverController } from './driverController';

const module = angular
  .module('myApp.controllers', [])
  .controller('driversController', DriversController)
  .controller('driverController', DriverController);

export default module.name;
