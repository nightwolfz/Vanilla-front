'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var map = require('map-stream');
var fs = require('fs');
var utils = require('../utils');
var paths = require('../config').paths;
var jsErrors = false;

gulp.task('js-hint', function () {
  if (!utils.isDevelopment()) return;

  return fs.mkdir(paths.logs.src, function (err) {
    fs.unlink(paths.logs.jsHint, function (err) {
      gulp.src(paths.js.files)
        .pipe(jshint())
        .pipe(getFileReporter())
        .on('end', function () {
          if (jsErrors) {
            utils.logError('JSHint: errors detected. See ' + paths.logs.jsHint + ' for more info.');
            jsErrors = false; // js-hint can be retriggered by gulp watch (ex: JS file changed)
          } else {
            utils.logSuccess('JSHint: no errors detected.');
          }
        });
    });
  });
});

function getFileReporter() {
  return map(function (file, cb) {
    if (!file.jshint.success) {
      var wstream = fs.createWriteStream(paths.logs.jsHint, {encoding: 'utf8', flags: 'a'});

      wstream.once('open', function (fd) {
        wstream.write(utils.trimJsPath(file.path) + utils.endOfLine);
        file.jshint.results.forEach(function (msg) {
          if (msg) {
            wstream.write('  - ' + msg.error.reason + ' (line ' + msg.error.line + ')' + utils.endOfLine);
          }
        });
        wstream.write(utils.endOfLine);
        wstream.end();
      });

      jsErrors = true;
    }
    cb(null, file);
  });
}
