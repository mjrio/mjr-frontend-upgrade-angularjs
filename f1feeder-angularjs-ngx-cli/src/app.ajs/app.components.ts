import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

import { DriverOverviewComponent } from '../app/components/driverOverview.component';

export default angular
  .module('myApp.components', [])
  .directive(
    'driverOverview',
    downgradeComponent({ component: DriverOverviewComponent }),
  ).name;
