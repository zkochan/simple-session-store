'use strict';

function SessionStore() {
  this._cache = {};
}

SessionStore.prototype.get = function(sid, cb) {
  return cb(null, this._cache[sid]);
};

SessionStore.prototype.set = function(sid, session, cb) {
  this._cache[sid] = session;
  cb();
};

exports.register = function(server, opts, next) {
  var sessionStore = new SessionStore();
  server.expose('set', sessionStore.set.bind(sessionStore));
  server.expose('get', sessionStore.get.bind(sessionStore));

  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
