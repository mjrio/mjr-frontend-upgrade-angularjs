import angular from 'angular';
import { react2angular } from 'react2angular';
import DriverOverviewComponent from './driverOverview';

export default angular
  .module('myApp.components', [])
  .component('driverOverview', react2angular(DriverOverviewComponent))
  .name;
