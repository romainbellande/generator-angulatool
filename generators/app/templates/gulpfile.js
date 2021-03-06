var gulp = require('gulp');
var runSequence = require('run-sequence');
var lint = require('./gulp/lint/lint');
var compile = require('./gulp/compile/compile');
var dogen = require('./gulp/dogen/dogen');
var inject = require('./gulp/inject/inject');
var server = require('./gulp/server/server');
var doc = require('./gulp/doc/doc');
var spec = require('./gulp/spec/spec');

lint();
compile();
dogen();
inject();
server();
doc();
spec();

gulp.task('watch', ['lint-watch', 'compile-watch', 'inject-html-watch', 'doc-watch']);

gulp.task('default', function () {
  runSequence('compile', 'doc', 'inject', 'watch', 'server-build');
});
