(function () {
  'use strict';
  var gulp = require('gulp');
  var babel = require('gulp-babel');
  var sourcemaps = require('gulp-sourcemaps');
  var path = require('path');
  var baseDir = '../../../';
  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var compileBabel = function () {
    gulp.task('compile-babel-server', function () {
      return gulp.src(getPath('app/src/server/index.js'))
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(getPath('app/build/server/')));
    });

    gulp.task('compile-babel-common', function () {
      return gulp.src(['!' + getPath('app/src/server/index.js'), '!' + getPath('app/src/**/*Spec.js'), getPath('app/src/**/*.js')])
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(getPath('app/build/')));
    });

    gulp.task('compile-babel-client-spec', function () {
      return gulp.src(getPath('app/src/client/**/*Spec.js'))
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(getPath('test/app/client/')));
    });

    gulp.task('compile-babel-server-spec', function () {
      return gulp.src(getPath('app/src/server/**/*Spec.js'))
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(getPath('test/app/server/')));
    });

    gulp.task('compile-babel', ['compile-babel-server', 'compile-babel-common', 'compile-babel-client-spec', 'compile-babel-server-spec']);

    gulp.task('compile-babel-watch', function () {
      gulp.watch(['!' + getPath('app/src/**/*Spec.js'), getPath('app/src/**/*.js')], ['compile-babel-common']);
      gulp.watch(getPath('app/src/client/**/*Spec.js'), ['compile-babel-client-spec']);
      gulp.watch(getPath('app/src/server/**/*Spec.js'), ['compile-babel-server-spec']);
    });
  };

  module.exports = compileBabel;
})();
