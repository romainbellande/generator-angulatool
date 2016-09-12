(function () {
  'use strict';

  var gulp = require('gulp');
  var nodemon = require('gulp-nodemon');
  var livereload = require('gulp-livereload');
  var notify = require('gulp-notify');
  var path = require('path');
  var baseDir = '../../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var serverBuild = function () {
    gulp.task('server-build', function () {
      livereload.listen();
      nodemon({
        script: getPath('app/build/server/index.js'),
        watch: getPath('app/build/')
      }).on('restart', function () {
        gulp.src(getPath('app/build/server/index.js'))
        .pipe(livereload())
        .pipe(notify('Reloading page, please wait...'));
      });
    });
  };

  module.exports = serverBuild;
})();
