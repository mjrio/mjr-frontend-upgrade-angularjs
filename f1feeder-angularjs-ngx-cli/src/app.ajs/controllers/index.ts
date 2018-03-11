import * as angular from 'angular';
import { DriversController } from './driversController';

const moduleName = angular
  .module('myApp.controllers', [])
  .controller('driversController', DriversController).name;

export default moduleName;
