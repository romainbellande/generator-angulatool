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

  var serverBuild = function () {
    gulp.task('server-build-live', function () {
      var server = gls.new(getPath('app/build/server/index.js'));
      server.start();
      gulp.watch(getPath('app/build/**'), function (file) {
        server.notify.apply(server, [file]);
      });
      gulp.watch(getPath('app/build/server/index.js'), server.start.bind(server));
    });

    gulp.task('server-build-open', function () {
      gulp.src('.').pipe(open({
        uri: 'http://127.0.0.1:3000'
      }));
    });

    gulp.task('server-build', function () {
      runSequence('server-build-live', 'server-build-open');
    });
  };

  module.exports = serverBuild;
})();
