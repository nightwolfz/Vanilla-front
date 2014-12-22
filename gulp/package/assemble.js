'use strict';

var gulp = require('gulp');
var fse = require('fs-extra');
var path = require('path');
var utils = require('../utils');
var paths = require('../config').paths;
var envPath = path.join(paths.package.src, utils.getEnv());
var dest = path.join(envPath, 'App');

gulp.task('package-assemble', function () {
  fse.ensureDirSync(paths.package.src);
  fse.mkdirSync(envPath);
  fse.copySync(paths.app.src, dest);
  fse.removeSync(path.join(dest, 'bower_components'));
  fse.removeSync(path.join(dest, 'sass'));
  fse.removeSync(path.join(dest, 'js'));
  fse.removeSync(path.join(dest, 'index.tmpl'));
  return;
});
