import angular from 'angular';
import apiService from './apiService';

export default angular
  .module('myApp.services', [])
  .factory('apiService', apiService)
  .name;
