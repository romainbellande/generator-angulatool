(function () {
  'use strict';

  var gulp = require('gulp');
  var inject = require('gulp-inject');
  var angularFilesort = require('gulp-angular-filesort');
  var path = require('path');
  var baseDir = '../../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var injectJs = function () {
    gulp.task('inject-js', function () {
      return gulp.src(getPath('app/build/client/index.html'))
      .pipe(
        inject(gulp.src(
          ['!./lib/**', '!**/*Spec.js', '**/*.js'], {cwd: getPath('app/build/client')}
        )
        .pipe(angularFilesort()),
          {
            addRootSlash: false
          })
        )
        .pipe(gulp.dest(getPath('app/build/client')));
    });

    gulp.task('inject-js-watch', function () {
      gulp.watch(['!' + getPath('app/build/client/**/*Spec.js'), '!' + getPath('app/build/client/lib/**/*.*'), getPath('app/build/client/**/*.js')], ['inject-js']);
    });
  };

  module.exports = injectJs;
})();
