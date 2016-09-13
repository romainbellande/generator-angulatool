(function () {
  'use strict';

  var gulp = require('gulp');
  var jsdoc = require('gulp-jsdoc3');

  var path = require('path');
  var baseDir = '../../../';
  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var docClient = function () {
    gulp.task('doc-server', function () {
      return gulp.src([getPath('README.md'), getPath('app/src/client/**/*.js')], {read: false})
      .pipe(jsdoc({
        opts: {
          destination: getPath('app/build/client/doc/server')
        }
      }));
    });

    gulp.task('doc-server-watch', function () {
      gulp.watch([getPath('README.md'), getPath('app/src/server/**/*.js')], ['doc-server']);
    });
  };

  module.exports = docClient;
})();
