module.exports = inputWords => inputWords.reduce((acc, c) => {
  acc[c] = ++acc[c] || 1;
  return acc;
}, {});
