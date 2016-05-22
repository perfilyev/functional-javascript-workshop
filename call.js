const slice = Array.prototype.slice;
const hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function duckCount() {
  return slice.call(arguments).filter(o => hasOwnProperty.call(o, 'quack')).length;
};
