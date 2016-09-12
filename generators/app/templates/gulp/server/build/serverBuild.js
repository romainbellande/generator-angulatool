(function () {
  'use strict';

  var gulp = require('gulp');
  var gls = require('gulp-live-server');
  var path = require('path');
  var baseDir = '../../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var serverBuild = function () {
    gulp.task('server-build', function () {
      var server = gls.new(getPath('app/build/server/index.js'));
      server.start();
      gulp.watch(getPath('app/build/**'), function (file) {
        server.notify.apply(server, [file]);
      });
      gulp.watch(getPath('app/build/server/index.js'), server.start.bind(server));
    });
  };

  module.exports = serverBuild;
})();
