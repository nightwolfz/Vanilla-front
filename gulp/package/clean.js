'use strict';

var gulp = require('gulp');
var fse = require('fs-extra');
var path = require('path');
var utils = require('../utils');
var paths = require('../config').paths;

gulp.task('package-clean', function () {
  var envPath = path.join(paths.package.src, utils.getEnv());
  var exists = fse.existsSync(envPath);
  if (exists) {
    fse.removeSync(envPath);
  }
});
