'use strict';

var gulp = require('gulp');
var path = require('path');
var fsSync = require('fs-sync');
var utils = require('../utils');
var paths = require('../config').paths;

gulp.task('build-env-config', function () {
  var envConfig = path.join(paths.js.config.src, utils.getEnv() + '.js');
  return fsSync.copy(envConfig, paths.js.config.dest, {force: true});
});
