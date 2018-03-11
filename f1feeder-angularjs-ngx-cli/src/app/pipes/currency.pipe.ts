import { Pipe, PipeTransform } from '@angular/core';
import { currencyFormatter } from '../../core/formatters/currency.formatter';

@Pipe({ name: 'currency' })
export class CurrencyPipe implements PipeTransform {
  transform(value: any): string {
    return currencyFormatter(value);
  }
}
