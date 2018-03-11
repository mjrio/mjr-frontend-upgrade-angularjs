import { Pipe, PipeTransform } from '@angular/core';
import { dateFormatter } from '../../core/formatters/date.formatter';

@Pipe({ name: 'my-date' })
export class MyDatePipe implements PipeTransform {
  transform(value: any): string {
    return dateFormatter(value);
  }
}
