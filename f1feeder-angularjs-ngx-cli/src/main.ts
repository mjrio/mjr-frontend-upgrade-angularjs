import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setAngularLib } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// AngularJS
import * as angular from 'angular';
import './app.ajs/app.module.ajs';
import './app.ajs/app.route';

if (environment.production) {
  enableProdMode();
}

// AngularJS
setAngularLib(angular);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
