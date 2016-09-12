var gulp = require('gulp');
var runSequence = require('run-sequence');
var lint = require('./gulp/lint/lint');
var compile = require('./gulp/compile/compile');
var dogen = require('./gulp/dogen/dogen');
var inject = require('./gulp/inject/inject');
var server = require('./gulp/server/server');

lint();
compile();
dogen();
inject();
server();

gulp.task('watch', ['lint-watch', 'compile-watch', 'inject-watch']);

gulp.task('default', function () {
  runSequence('compile', 'inject', ['watch', 'server-build']);
});
