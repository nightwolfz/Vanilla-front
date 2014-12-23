exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/**/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  directConnect: true,

  chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  baseUrl: 'http://localhost:8080',

  framework: 'mocha',

  mochaOpts: {
    reporter: 'spec',

    // Timeouts disabled until selenium releases the fix.
    // https://github.com/angular/protractor/issues/1109
    enableTimeouts: false
    //timeout: 30000
  }
};
