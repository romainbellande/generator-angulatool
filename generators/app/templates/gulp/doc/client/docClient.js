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
    gulp.task('doc-client', function () {
      return gulp.src(['!' + getPath('app/src/client/lib/**'), getPath('README.md'), getPath('app/src/client/**/*.js')], {read: false})
      .pipe(jsdoc({
        opts: {
          destination: getPath('app/build/client/doc/client')
        }
      }));
    });

    gulp.task('doc-client-watch', function () {
      gulp.watch(['!' + getPath('app/src/client/lib/**'), getPath('README.md'), getPath('app/src/client/**/*.js')], ['doc-client']);
    });
  };

  module.exports = docClient;
})();
