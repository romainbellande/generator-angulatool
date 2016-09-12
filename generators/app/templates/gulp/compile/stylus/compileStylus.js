(function () {
  'use strict';

  var gulp = require('gulp');
  var stylus = require('gulp-stylus');
  var sourcemaps = require('gulp-sourcemaps');
  var path = require('path');
  var baseDir = '../../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var compileStylus = function () {
    gulp.task('compile-stylus', function () {
      return gulp.src(getPath('app/src/**/*.styl'))
      .pipe(sourcemaps.init())
      .pipe(stylus())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(getPath('app/build/')));
    });

    gulp.task('compile-stylus-watch', function () {
      gulp.watch(getPath('app/src/**/*.styl'), ['compile-stylus']);
    });
  };

  module.exports = compileStylus;
})();
