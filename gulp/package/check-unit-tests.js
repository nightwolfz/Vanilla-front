'use strict';

var gulp = require('gulp');
var karma = require('gulp-karma');
var utils = require('../utils');
var paths = require('../config').paths;

gulp.task('package-check-unit-tests', function () {
  // Pass a fake path to src(), otherwise gulp-karma ignores
  // the files array defined in the karma config file.
  return gulp.src('fakePath')
    .pipe(karma({
      configFile: paths.tests.unit.config,
      action: 'run'
    }))
    .on('error', function (err) {
      utils.logError('Unit tests not passing. Packaging cancelled.');
      process.exit(1);
    });
});
