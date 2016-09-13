(function () {
  'use strict';

  var gulp = require('gulp');
  var docClient = require('./client/docClient');
  var docServer = require('./server/docServer');

  var doc = function () {
    docClient();
    docServer();
    gulp.task('doc', ['doc-client', 'doc-server']);
    gulp.task('doc-watch', ['doc-client-watch', 'doc-server-watch']);
  };

  module.exports = doc;
})();
