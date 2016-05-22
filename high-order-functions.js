 const repeat = (operation, num) => num <= 0 ? null : operation() || repeat(operation, num - 1);
 module.exports = repeat;

