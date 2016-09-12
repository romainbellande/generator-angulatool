(function () {
  'use strict';

  var gulp = require('gulp');
  var compileBabel = require('./babel/compileBabel');
  var compileJade = require('./jade/compileJade');
  var compileStylus = require('./stylus/compileStylus');

  var compile = function () {
    compileBabel();
    compileJade();
    compileStylus();

    gulp.task('compile', ['compile-babel', 'compile-jade', 'compile-stylus']);

    gulp.task('compile-watch', ['compile-babel-watch', 'compile-jade-watch', 'compile-stylus-watch']);
  };

  module.exports = compile;
})();
