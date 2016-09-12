(function () {
  'use strict';

  var serverBuild = require('./build/serverBuild');
  var serverDist = require('./dist/serverDist');

  var server = function () {
    serverBuild();
    serverDist();
  };

  module.exports = server;
})();
