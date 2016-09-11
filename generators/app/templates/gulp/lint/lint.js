(function () {
  'use strict';
  var gulp = require('gulp');
  var eslint = require('gulp-eslint');
  var excludeGitignore = require('gulp-exclude-gitignore');

  var lint = function () {
    gulp.task('static', function () {
      return gulp.src('./app/src/**/*.js')
      .pipe(excludeGitignore())
      .pipe(eslint({
        configFile: 'eslint.json'
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
    });
  };

  module.exports = lint;
})();
