import { Component, Input } from '@angular/core';

@Component({
  selector: 'driver',
  template: `
  <div class="driver-picture">
    <div class="avatar">
      <img *ngIf="driver" [src]="'/assets/img/drivers/' + driver.Driver.driverId + '.png'" />
      <img *ngIf="driver" [src]="'/assets/img/flags/' + driver.Driver.nationality + '.png'" />
      <br/> {{driver.Driver.givenName}} {{driver.Driver.familyName}}
    </div>
  </div>
  <div class="driver-status">
    Country: {{driver.Driver.nationality}}
    <br/> Team: {{driver.Constructors[0].name}}
    <br/> Birth: {{driver.Driver.dateOfBirth}}
    <br/>
    <a [href]="'http://' + driver.Driver.url" target="_blank">Biography</a>
  </div>
  `,
})
export class DriverComponent {
  @Input() driver: any;
}
