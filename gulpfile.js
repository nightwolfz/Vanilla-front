'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var utils = require('./gulp/utils');

require('./gulp/build/begin');
require('./gulp/build/index');
require('./gulp/build/sass');
require('./gulp/build/env-config');
require('./gulp/build/bundle');
require('./gulp/build/end');
require('./gulp/build/js-hint');
require('./gulp/build/run-unit-tests');
require('./gulp/build/webserver');
require('./gulp/build/watch');
require('./gulp/build/livereload');
require('./gulp/package/check-args');
require('./gulp/package/clean');
require('./gulp/package/check-unit-tests');
require('./gulp/package/check-e2e-tests');
require('./gulp/package/assemble');

gulp.task('build', function (cb) {
  runSequence(
    'build-begin',
    'build-index',
    'build-sass',
    'build-env-config',
    'build-bundle',
    'build-end',
    ['js-hint', 'run-unit-tests'],
    cb);
});

gulp.task('package', function (cb) {
  runSequence(
    'package-check-args',
    'package-clean',
    'package-check-unit-tests',
    'build',
    'package-check-e2e-tests',
    'package-assemble',
    cb);
});

gulp.task('default', ['build'], function () {
  if (utils.isDevelopment()) {
    gulp.start('webserver');
    gulp.start('watch');
  }
});
