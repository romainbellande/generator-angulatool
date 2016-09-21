(function () {
  'use strict';

  var gulp = require('gulp');
  var gulpDogen = require('gulp-dogen');
  var path = require('path');

  var dogen = function () {
    gulpDogen.config({
      templatesPath: 'gulp/dogen/templates',
      gulp: gulp
    });

    gulpDogen.task('component', path.join(__dirname, '../../app/src/client/components/'));
    gulpDogen.task('serverEntity', path.join(__dirname, '../../app/src/server/entities/'));
  };

  module.exports = dogen;
})();
