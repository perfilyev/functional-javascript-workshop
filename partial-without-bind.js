const slice = Array.prototype.slice;
module.exports = (ns) => function log() {
  console.log.apply(null, [ns].concat(slice.call(arguments)));
};
