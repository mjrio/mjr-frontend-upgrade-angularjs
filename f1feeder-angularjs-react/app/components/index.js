import angular from 'angular';
import { react2angular } from 'react2angular';
import DriverOverviewComponent from './driverOverview';

const module = angular
  .module('myApp.components', [])
  .component('driverOverview', react2angular(DriverOverviewComponent));

export default module.name;
