export default function interpolate(version) {
  return text => {
    return String(text).replace(/\%VERSION\%/gm, version);
  };
}
