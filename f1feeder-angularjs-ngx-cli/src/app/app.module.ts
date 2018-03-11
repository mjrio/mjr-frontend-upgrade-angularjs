import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

/* Components */
import { DriverOverviewComponent } from './components/driverOverview.component';
import { DriverComponent } from './components/driver.component';
import { DriverRacesComponent } from './components/driverRaces.component';

/* Pipes */
import { CurrencyPipe } from './pipes/currency.pipe';
import { MyDatePipe } from './pipes/date.pipe';
import { OrdinalPipe } from './pipes/ordinal.pipe';

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  declarations: [
    // components
    DriverOverviewComponent,
    DriverComponent,
    DriverRacesComponent,

    // pipes
    CurrencyPipe,
    MyDatePipe,
    OrdinalPipe,
  ],
  entryComponents: [
    // components accessed from AngularJS
    DriverOverviewComponent,
  ],
  providers: [],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(
      document.body,
      ['F1FeederApp'] /*, { strictDi: true } */,
    );
  }
}
