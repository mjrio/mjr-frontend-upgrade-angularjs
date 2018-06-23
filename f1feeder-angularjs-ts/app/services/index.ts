import * as angular from 'angular';
import { ApiService } from './apiService';

export default angular
  .module('myApp.services', [])
  .service('apiService', ApiService)
  .name;
