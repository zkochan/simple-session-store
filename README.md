# simple-session-store

A simple in-memory session store for [humble-session](https://github.com/zkochan/humble-session).

[![Dependency Status](https://david-dm.org/zkochan/simple-session-store/status.svg?style=flat)](https://david-dm.org/zkochan/simple-session-store)
[![Build Status](https://travis-ci.org/zkochan/simple-session-store.svg?branch=master)](https://travis-ci.org/zkochan/simple-session-store)
[![npm version](https://badge.fury.io/js/simple-session-store.svg)](http://badge.fury.io/js/simple-session-store)


## Installation

```
npm i --save simple-session-store
```


## Usage

Register the plugin:

```js
var Hapi = require('hapi');
var simpleSessionStore = require('simple-session-store');
var humbleSession = require('humble-session');

var server = new Hapi.Server();

server.register({
    register: simpleSessionStore
  }, {
    register: humbleSession,
    options: {
      password: 'secret',
      sessionStoreName: 'simple-session-store'
    }
  }, function(err) {
    /* ... */
});
```


## License

MIT
