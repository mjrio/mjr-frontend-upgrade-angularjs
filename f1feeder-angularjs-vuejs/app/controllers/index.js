import angular from 'angular';
import { DriversController } from './driversController';

const module = angular
  .module('myApp.controllers', [])
  .controller('driversController', DriversController);

export default module.name;
