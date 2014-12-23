'use strict';

var gulp = require('gulp');
var paths = require('../config').paths;
var utils = require('../utils');
var connect = require('gulp-connect');
var protractor = require('gulp-protractor').protractor;

gulp.task('package-check-e2e-tests', function () {
  connect.server({root: paths.app.relative});

  // Pass a fake path to src(), otherwise gulp-protractor ignores
  // the files array defined in the protractor config file.
  return gulp.src('fakePath')
    .pipe(protractor({
      configFile: paths.tests.e2e.config
    }))
    .on('end', function () {
      connect.serverClose();
    })
    .on('error', function (err) {
      connect.serverClose();
      utils.logError('End-to-end tests not passing. Packaging cancelled.');
      process.exit(1);
    });
});
