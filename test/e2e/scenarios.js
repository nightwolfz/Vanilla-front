'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('my app', function () {
  browser.get('');

  it('should automatically redirect to / when location hash/fragment is empty', function () {
    expect(browser.getLocationAbsUrl()).to.eventually.match(/\//);
  });

  describe('home', function () {
    beforeEach(function () {
      browser.get('#/home');
    });

    it('should render home when user navigates to /home', function () {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).to.eventually.match(/Home/);
    });
  });

  describe('about', function () {
    beforeEach(function () {
      browser.get('#/about');
    });

    it('should render about when user navigates to /about', function () {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).to.eventually.match(/About/);
    });
  });
});
