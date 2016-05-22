/* eslint wrap-iife: [1, "outside"] */
module.exports = (a, f, init) => (function iter(i, p) {
  return i >= a.length ? p : iter(i + 1, f(p, a[i], i, a));
})(0, init);
