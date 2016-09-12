(function () {
  'use strict';

  var gulp = require('gulp');
  var gls = require('gulp-live-server');
  var runSequence = require('run-sequence');
  var open = require('gulp-open');
  var path = require('path');
  var baseDir = '../../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var serverDist = function () {
    gulp.task('server-dist-live', function () {
      var server = gls.new(getPath('app/dist/server/index.js'));
      server.start();
    });

    gulp.task('server-dist-open', function () {
      gulp.src('.').pipe(open({
        uri: 'http://127.0.0.1:3000'
      }));
    });

    gulp.task('server-dist', function () {
      runSequence('server-dist-live', 'server-dist-open');
    });
  };

  module.exports = serverDist;
})();
