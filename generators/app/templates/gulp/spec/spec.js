(function () {
  'use strict';

  var specClient = require('./client/specClient');

  var spec = function () {
    specClient();
  };

  module.exports = spec;
})();
