'use strict';

// Example using the 'expect' assertion style
var expect = chai.expect;

describe('Services', function () {
  beforeEach(module('myApp.services'));

  describe('version', function () {
    it('should return current version', inject(function (version) {
      expect(version).to.equal('0.5');
    }));
  });
});
