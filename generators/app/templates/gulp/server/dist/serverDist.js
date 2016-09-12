(function () {
  'use strict';

  var gulp = require('gulp');
  var nodemon = require('gulp-nodemon');
  var path = require('path');
  var baseDir = '../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var serverDist = function () {
    gulp.task('server-dist', function (cb) {
      var started = false;
      return nodemon({
        script: getPath('app/dist/server/index.js')
      }).on('start', function () {
        if (!started) {
          cb();
          started = true;
        }
      });
    });
  };

  module.exports = serverDist;
})();
