(function () {
  'use strict';
  var gulp = require('gulp');
  var runSequence = require('run-sequence');
  var injectCss = require('./css/injectCss');
  var injectJs = require('./js/injectJs');
  var injectHtml = require('./html/injectHtml');
  var injectLib = require('./lib/injectLib');

  var inject = function () {
    injectCss();
    injectJs();
    injectHtml();
    injectLib();

    gulp.task('inject', function () {
      runSequence('inject-lib', 'inject-css', 'inject-js', 'inject-html');
    });

    gulp.task('inject-watch', ['inject-css-watch', 'inject-js-watch', 'inject-html-watch']);
  };

  module.exports = inject;
})();
