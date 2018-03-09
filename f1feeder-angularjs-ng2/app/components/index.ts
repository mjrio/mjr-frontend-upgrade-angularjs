import angular from 'angular';
import { SampleComponent } from './sample.component';
import { downgradeComponent } from '@angular/upgrade/static';

const moduleName = angular
  .module('myApp.components', [])
  .directive('sample', downgradeComponent({ component: SampleComponent })).name;

export default moduleName;
