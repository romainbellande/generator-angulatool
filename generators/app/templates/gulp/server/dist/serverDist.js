(function () {
  'use strict';

  var gulp = require('gulp');
  var runSequence = require('run-sequence');

  var gls = require('gulp-live-server');
  var open = require('gulp-open');

  var usemin = require('gulp-usemin');
  var minifyHtml = require('gulp-htmlmin');
  var minifyCss = require('gulp-clean-css');
  var uglify = require('gulp-uglify');
  var rev = require('gulp-rev');

  var path = require('path');
  var baseDir = '../../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var serverDist = function () {
    gulp.task('server-dist-live', function () {
      var server = gls.new(getPath('app/dist/server/index.js'));
      server.start();
    });

    gulp.task('server-dist-copy', function () {
      return gulp.src(getPath('app/build/server/**/*.js'))
      .pipe(gulp.dest((getPath('app/dist/server'))));
    });

    gulp.task('server-dist-min', function () {
      return gulp.src(getPath('app/build/client/index.html'))
      .pipe(usemin({
        css: [minifyCss(), rev()],
        html: [minifyHtml({collapseWhitespace: true})],
        js: [uglify({mangle: false}), rev()],
        inlinejs: [uglify({beautify: true, mangle: true})],
        inlinecss: [minifyCss()]
      }))
      .pipe(gulp.dest(getPath('app/dist/client')));
    });

    gulp.task('server-dist-open', function () {
      gulp.src('.').pipe(open({
        uri: 'http://127.0.0.1:3000'
      }));
    });

    gulp.task('server-dist', function () {
      runSequence(['server-dist-min', 'server-dist-copy'], 'server-dist-live', 'server-dist-open');
    });
  };

  module.exports = serverDist;
})();
