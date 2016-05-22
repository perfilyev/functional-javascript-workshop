module.exports = wl => users => users.every(user => !wl.every(good => good.id !== user.id));
module.exports = wl => users => users.every(user => wl.some(good => good.id === user.id));
