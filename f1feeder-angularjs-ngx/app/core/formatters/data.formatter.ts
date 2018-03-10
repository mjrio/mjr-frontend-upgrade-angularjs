import { DateTime } from 'luxon';

export function dateFormatter(value) {
  if (!(value instanceof Date)) {
    return value;
  }

  const dt = new DateTime(value);
  return dt.toFormat('dd MMM yyyy');
}
