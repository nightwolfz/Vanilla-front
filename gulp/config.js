'use strict';

module.exports = {
  paths: {
    app: {
      src: 'app',
      relative: './app'
    },
    bundles: {
      src: './app/bundles',
      css: {
        app: './app/bundles/app.css',
        map: './app/bundles/app.css.map'
      }
    },
    package: {
      src: './package'
    },
    html: {
      src: './app',
      index: './app/index.html',
      indexTemplate: './app/index.tmpl',
      files: './app/views/**/*.html'
    },
    sass: {
      src: 'sass',
      main: './app/sass/app.scss',
      files: './app/sass/**/*.scss',
      sourcemapPath: '../sass'
    },
    js: {
      files: './app/js/**/*.js',
      config: {
        src: './app/js/config',
        dest: './app/js/config.js'
      }
    },
    logs: {
      src: 'logs',
      jsHint: 'logs/js-hint.txt'
    },
    tests: {
      unit: {
        config: './test/karma.conf.js',
        filesToWatch: [
          './app/js/**/*.js',
          './test/unit/**/*.js'
        ]
      },
      e2e: {
        config: './test/protractor-conf.js'
      }
    }
  }
};
