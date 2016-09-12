(function () {
  'use strict';

  var gulp = require('gulp');
  var wiredep = require('wiredep').stream;
  var bower = require('gulp-bower');
  var path = require('path');
  var baseDir = '../../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var lib = function () {
    gulp.task('inject-lib', function () {
      bower();
      return gulp.src(getPath('app/build/client/index.html'))
      .pipe(wiredep({
        directory: getPath('app/build/client/lib'),
        devDependencies: true
      }))
      .pipe(gulp.dest(getPath('app/build/client')));
    });
  };

  module.exports = lib;
})();
