module.exports = function (config) {
  config.set({

    basePath: '../',

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude: [],

    frameworks: ['mocha', 'chai', 'sinon'],

    preprocessors: {},

    reporters: ['mocha', 'html'],

    mochaReporter: {
      output: 'minimal'
    },

    htmlReporter: {
      outputFile: 'logs/unit-tests.html'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: false
  });
};
