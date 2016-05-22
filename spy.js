module.exports = (target, method) => {
  const result = { count: 0 };

  const m = target[method];
  target[method] = function spying() {
    result.count++;
    return m.apply(this, arguments);
  };

  return result;
};
