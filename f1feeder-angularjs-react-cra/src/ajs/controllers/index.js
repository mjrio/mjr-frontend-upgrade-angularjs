import angular from 'angular';
import { DriversController } from './driversController';

export default angular
  .module('myApp.controllers', [])
  .controller('driversController', DriversController)
  .name;
