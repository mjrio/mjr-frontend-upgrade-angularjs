export default function ordinalFormatter(number) {
  if (Number.isNaN(number) || number < 1) {
    return number;
  }
  const lastDigit = number % 10;
  if (lastDigit === 1) {
    return `${number}st`;
  }
  if (lastDigit === 2) {
    return `${number}nd`;
  }
  if (lastDigit === 3) {
    return `${number}rd`;
  }
  return `${number}th`;
}
