/*
 * Breach: [breach_bookmarks] index.js
 *
 * Copyright (c) 2014, Joah Gerstenberg. All rights reserved.
 *
 * @author: joahg
 *
 * @log:
 */
'use strict';

var breach = require('breach_module');
var common = require("./lib/common.js")

breach.init(function() {
  breach.expose('init', function(src, args, cb_) {
    console.log('Initialization');
    return cb_();
  });

  breach.expose('kill', function(args, cb_) {
    common.exit(0);
  });
});

process.on('uncaughtException', function (err) {
  common.fatal(err);
});