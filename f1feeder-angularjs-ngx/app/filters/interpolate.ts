interpolate.$inject = ['version'];
export function interpolate(version) {
  return function filterHandler(text) {
    return String(text).replace(/\%VERSION\%/gm, version);
  };
}

// Ordinal pipe
// {{ 25 | ordinal }}   =>  25th

function ordinal() {
  return function(number) {
    if(isNaN(number) || number < 1) {
      return number;
   }
    var lastDigit = number % 10;
    if(lastDigit === 1) {
      return number + 'st'
    } else if(lastDigit === 2) {
      return number + 'nd'
    } else if (lastDigit === 3) {
      return number + 'rd'
    } else if (lastDigit > 3) {
      return number + 'th'
    }
  }
};
