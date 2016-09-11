(function () {
  'use strict';

  var gulp = require('gulp');
  var gulpJade = require('gulp-jade');
  var jade = require('jade');
  var sourcemaps = require('gulp-sourcemaps');

  var compileJade = function () {
    gulp.task('compile-jade-index', function () {
      return gulp.src('./app/src/client/index.jade')
      .pipe(sourcemaps.init())
      .pipe(gulpJade({
        jade: jade,
        pretty: true
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./app/build/client/'));
    });

    gulp.task('compile-jade', function () {
      return gulp.src('./app/src/**/*.jade')
      .pipe(sourcemaps.init())
      .pipe(gulpJade({
        jade: jade,
        pretty: true
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./app/build/'));
    });
  };

  module.exports = compileJade;
})();
