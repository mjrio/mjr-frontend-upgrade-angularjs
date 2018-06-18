import angular from 'angular';
import { DriversController } from './driversController';

const module2 = angular
  .module('myApp.controllers', [])
  .controller('driversController', DriversController)

export default module2.name;
