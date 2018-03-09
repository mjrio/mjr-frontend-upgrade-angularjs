import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { SampleComponent } from './components/sample.component';

@NgModule({
  imports: [CommonModule, BrowserModule, UpgradeModule],
  declarations: [SampleComponent],
  entryComponents: [SampleComponent],
  // bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['F1FeederApp'] /*, { strictDi: true } */);
  }
}
