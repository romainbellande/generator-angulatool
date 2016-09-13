(function () {
  'use strict';

  var gulp = require('gulp');
  var inject = require('gulp-inject');
  var path = require('path');
  var baseDir = '../../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var injectCss = function () {
    gulp.task('inject-css', function () {
      return gulp.src(getPath('app/build/client/index.html'))
      .pipe(
        inject(
          gulp.src(
            ['!./lib/**', '!./doc/**', '**/*.css'], {cwd: getPath('app/build/client')}
          ),
          {
            addRootSlash: false
          })
        )
      .pipe(gulp.dest(getPath('app/build/client')));
    });

    gulp.task('inject-css-watch', function () {
      gulp.watch(getPath('app/build/client/**/*.css'), ['inject-css']);
    });
  };

  module.exports = injectCss;
})();
