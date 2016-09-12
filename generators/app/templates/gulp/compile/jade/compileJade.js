(function () {
  'use strict';

  var gulp = require('gulp');
  var gulpJade = require('gulp-jade');
  var jade = require('jade');
  var sourcemaps = require('gulp-sourcemaps');
  var path = require('path');
  var baseDir = '../../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var compileJade = function () {
    gulp.task('compile-jade-common', function () {
      return gulp.src(['!' + getPath('app/src/client/index.jade'), getPath('app/src/**/*.jade')])
      .pipe(sourcemaps.init())
      .pipe(gulpJade({
        jade: jade,
        pretty: true
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(getPath('app/build/')));
    });

    gulp.task('compile-jade-index', function () {
      return gulp.src(getPath('app/src/client/index.jade'))
      .pipe(sourcemaps.init())
      .pipe(gulpJade({
        jade: jade,
        pretty: true
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(getPath('app/build/client/')));
    });

    gulp.task('compile-jade', ['compile-jade-common', 'compile-jade-index']);

    gulp.task('compile-jade-watch', function () {
      gulp.watch(getPath('app/src/client/index.jade', ['compile-jade-index']));
      gulp.watch(['!' + getPath('app/src/client/index.jade'), getPath('app/src/**/*.jade')], ['compile-jade-common']);
    });
  };

  module.exports = compileJade;
})();
