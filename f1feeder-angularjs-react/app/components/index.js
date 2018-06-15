import angular from 'angular';
import { react2angular } from 'react2angular';
import MyComponent from './myComponent';

const module = angular
  .module('myApp.components', [])
  .component('myComponent', react2angular(MyComponent, null, ['$http']));

export default module.name;
