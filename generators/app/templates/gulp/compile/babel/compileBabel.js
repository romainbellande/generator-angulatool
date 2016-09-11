(function () {
  'use strict';
  var gulp = require('gulp');
  var babel = require('gulp-babel');
  var sourcemaps = require('gulp-sourcemaps');

  var compileBabel = function () {
    gulp.task('compile-babel', function () {
      return gulp.src('./app/src/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./app/build/'));
    });

    gulp.task('compile-babel-client-spec', function () {
      return gulp.src('./app/src/client/**/*Spec.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./test/app/client/'));
    });

    gulp.task('compile-babel-server-spec', function () {
      return gulp.src('./app/src/server/**/*Spec.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./test/app/server/'));
    });

    module.exports = compileBabel;
  };
})();
