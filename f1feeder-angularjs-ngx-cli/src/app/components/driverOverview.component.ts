import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as log from 'loglevel';
import apiService from '../../core/services/apiService';

@Component({
  selector: 'driver-overview',
  template: `
    <section *ngIf="driver" id="main">
      <nav id="secondary" class="main-nav col-md-3">
        <driver [driver]="driver"></driver>
        <br/>
        <a href="./#/drivers" class="btn btn-default">Back to drivers list</a>
      </nav>
      <div class="main-content col-md-9">
        <driver-races [races]="races"></driver-races>
      </div>
    </section>
  `,
})
export class DriverOverviewComponent implements OnInit {
  @Input() id;
  driver: any;
  races = [];

  ngOnInit() {
    log.info('loading data (Angular)');

    apiService.getDriverDetails(this.id).then(driver => {
      this.driver = driver;
      console.log(driver);
    });
    apiService.getDriverRaces(this.id).then(races => {
      this.races = races;
    });
  }
}
