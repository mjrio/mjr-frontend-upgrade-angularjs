import * as angular from 'angular';
import { ApiService } from './apiService';

const moduleName = angular.module('myApp.services', []).service('apiService', ApiService).name;
export default moduleName;
