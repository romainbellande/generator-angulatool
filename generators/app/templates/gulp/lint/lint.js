(function () {
  'use strict';
  var gulp = require('gulp');
  var eslint = require('gulp-eslint');
  var excludeGitignore = require('gulp-exclude-gitignore');
  var baseDir = '../../';

  var lint = function () {
    gulp.task('lint-js', function () {
      return gulp.src(baseDir + 'app/src/**/*.js')
      .pipe(excludeGitignore())
      .pipe(eslint({
        configFile: 'eslint.json'
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
    });

    gulp.task('lint-watch', function () {
      gulp.watch(baseDir + 'app/src/**/*.js', ['lint-js']);
    });
  };

  module.exports = lint;
})();
