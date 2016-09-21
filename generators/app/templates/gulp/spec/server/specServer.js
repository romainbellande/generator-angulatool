(function () {
  'use strict';

  var gulp = require('gulp');
  var KarmaServer = require('karma').Server;
  // var istanbul = require('gulp-istanbul');
  // var plumber = require('gulp-plumber');
  // var coveralls = require('gulp-coveralls');
  var path = require('path');
  var baseDir = '../../../';

  var currentPath = path.join(__dirname, baseDir);

  var getPath = function (_path) {
    return currentPath + _path;
  };

  var specClient = function (done) {
    gulp.task('spec-server', function () {
      new KarmaServer({
        configFile: getPath('test/config/unit/server/karmaUnitServer.js'),
        singleRun: true
      }, done).start();
    });
  };
  module.exports = specClient;
})();
