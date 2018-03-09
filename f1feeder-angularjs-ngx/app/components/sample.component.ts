import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sample',
  template: `
    <h1 (click)="onClick($event)">From Angular: {{text}}</h1>
  `,
})
export class SampleComponent {
  @Input() text = 'default';
  @Output() updated = new EventEmitter();
  constructor() {
    console.log('SampleComponent-cstr');
  }

  onClick(event) {
    this.updated.emit(event);
  }

  ngOnDestroy() {
    console.log('SampleComponent-destroy');
  }
}
