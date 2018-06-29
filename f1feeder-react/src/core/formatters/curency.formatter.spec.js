import { currencyFormatter } from './currency.formatter';

describe('currency.formatter', () => {
  test('format number', () => {
    expect(currencyFormatter(123456.123)).toBe('123.456,12 €');
    expect(currencyFormatter(456)).toBe('456,00 €');
  });

  test('format string as number', () => {
    expect(currencyFormatter('123456.123')).toBe('123.456,12 €');
    expect(currencyFormatter('hallo')).toBe('hallo');
  });

  test('format invalid type', () => {
    expect(currencyFormatter(true)).toBe(true);
  });
});
