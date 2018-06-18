import angular from 'angular';
import { react2angular } from 'react2angular';
import DriverOverviewComponent from '../../components/driverOverview';

const componentsModule = angular
  .module('myApp.components', [])
  .component('driverOverview', react2angular(DriverOverviewComponent));

export default componentsModule.name;
