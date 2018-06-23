import angular from 'angular';
import { SampleComponent } from './sample.component';
import { downgradeComponent } from '@angular/upgrade/static';

export default angular
  .module('myApp.components', [])
  .directive('sample', downgradeComponent({ component: SampleComponent }))
  .name;
