import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, setAngularLib } from '@angular/upgrade/static';
import { AppModule } from './app.module';
// import { Router } from '@angular/router';

import angular from 'angular';

// routes
import './app.route';

// import css here
import './styles/styles.css';

import appModule from './app.module.ajs';

// config stuff
appModule.config($locationProvider => {
  $locationProvider.hashPrefix('');
});

// constants
appModule.constant('appVersion', VERSION);
appModule.constant('appEnv', ENV);

setAngularLib(angular);

// bootstrap Angular & AngularJS
// https://github.com/raymer/angularHybrid
// https://github.com/Strulle/ng-upgrade-seed
platformBrowserDynamic().bootstrapModule(AppModule);
