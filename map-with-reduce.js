module.exports = (a, fn, thisArg) => a.reduce((acc, c) => acc.concat([fn.call(thisArg, c)]), []);
