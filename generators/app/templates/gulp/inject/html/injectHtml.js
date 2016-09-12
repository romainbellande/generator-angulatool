(function () {
  'use strict';

  var gulp = require('gulp');
  var inject = require('gulp-inject');
  var minifyHtmlInput = require('html-minifier').minify;
  var escape = require('js-string-escape');
  var path = require('path');
  var baseDir = '../../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var injectHtml = function () {
    gulp.task('inject-html', function () {
      return gulp.src(getPath('app/src/client/components/**/*Component.js'))
      .pipe(inject(
        gulp.src('**/*View.html', {cwd: getPath('app/build/client/components')}),
        {
          relative: true,
          starttag: 'template: \'',
          endtag: '\'',
          transform: function (filePath, file, i, length, targetFile) {
            if (filePath.split('/')[filePath.split('/').length - 3] === targetFile.path.split('/')[targetFile.path.split('/').length - 3]) {
              console.log('[template injected]: ' + filePath.split('/')[filePath.split('/').length - 1]);
              return escape(minifyHtmlInput(file.contents.toString('utf-8'), {collapseWhitespace: true, preventAttributesEscaping: true}));
            }
          }
        }
        )
      ).pipe(gulp.dest(getPath('app/build/client/components/')));
    });

    gulp.task('inject-html-watch', function () {
      gulp.watch([getPath('app/build/client/components/**/*.html'), getPath('app/build/client/components/**/*Component.js')], ['inject-html']);
    });
  };

  module.exports = injectHtml;
})();
