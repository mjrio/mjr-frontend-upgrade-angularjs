import angular from 'angular';
import apiService from './apiService';

const module = angular.module('myApp.services', []).factory('apiService', apiService);

export default module.name;
