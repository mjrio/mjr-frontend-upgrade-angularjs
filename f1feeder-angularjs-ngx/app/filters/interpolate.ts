interpolate.$inject = ['version'];
export function interpolate(version) {
  return function filterHandler(text) {
    return String(text).replace(/\%VERSION\%/gm, version);
  };
}
