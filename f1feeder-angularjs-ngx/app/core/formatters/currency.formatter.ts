const formatter = new Intl.NumberFormat('nl-BE', {
  style: 'currency',
  currency: 'EUR',
});

// format number as currency string
// 123456.7910 => 123.456,79 €
export function currencyFormatter(input) {
  const value = Number.parseFloat(input);
  if (Number.isNaN(value)) {
    return input;
  }
  return formatter.format(value);
}
