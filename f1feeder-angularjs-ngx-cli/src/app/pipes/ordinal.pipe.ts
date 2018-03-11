import { Pipe, PipeTransform } from '@angular/core';
import { ordinalFormatter } from '../../core/formatters/ordinal.formatter';

@Pipe({ name: 'ordinal' })
export class OrdinalPipe implements PipeTransform {
  transform(value: any): string {
    return ordinalFormatter(value);
  }
}
