var gulp = require('gulp');
var lint = require('./gulp/lint/lint');
var compile = require('./gulp/compile/compile');

lint();
compile();

gulp.task('default', 'static');
