module.exports = (messages) => messages.filter(o => o.message.length < 50).map(i => i.message);
